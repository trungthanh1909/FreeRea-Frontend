import { useMutation, useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { showToast } from "../../utils/toast";
import { queryClient } from "../../config/reactQueryClient";
import { createServiceConfig } from "../../config/configuration";

import {
    InternalUserProfileControllerApi,
    UserProfileControllerApi,
    UserProfileChangeAvatarRequest,
    UserProfileCreationRequest,
    UserProfileUpdateRequest,
} from "../../api/userProfile-service";

import {
    setProfile,
    updateAvatar,
    updateProfileName,
} from "../../store/slices/userSlice";

// Config + API
const config = createServiceConfig();
const internalApi = new InternalUserProfileControllerApi(config);
const publicApi = new UserProfileControllerApi(config);

// GET profile by user id (public API)
export const useGetUserProfileById = (userId: string) => {
    const dispatch = useDispatch();

    return useQuery({
        queryKey: ["user-profile", userId],
        queryFn: async () => {
            const res = await publicApi.getUserProfileById({ id: userId });
            const data = res.data.result;
            if (data) dispatch(setProfile(data));
            return data;
        },
        enabled: !!userId,
    });
};

// POST /internal/create
export const useCreateUserProfile = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: async (payload: UserProfileCreationRequest) => {
            const res = await internalApi.createUserProfile({
                userProfileCreationRequest: payload,
            });
            return res.data.result;
        },
        onSuccess: (data) => {
            if (data) dispatch(setProfile(data));
            showToast("Tạo hồ sơ người dùng thành công!");
        },
    });
};

// PUT /internal/change-avatar
export const useChangeAvatar = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: async (payload: UserProfileChangeAvatarRequest) => {
            const res = await internalApi.changeAvatar({
                userProfileChangeAvatarRequest: payload,
            });
            return res.data.result;
        },
        onSuccess: (data) => {
            if (data?.newAvatarUrl) dispatch(updateAvatar(data.newAvatarUrl));
            showToast("Cập nhật avatar thành công!");
        },
    });
};

// PUT /internal/update-user-profile
export const useUpdateUserProfile = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: async (payload: UserProfileUpdateRequest) => {
            const res = await internalApi.updateUserProfile({
                userProfileUpdateRequest: payload,
            });
            return res.data.result;
        },
        onSuccess: (data) => {
            if (data?.newName) dispatch(updateProfileName(data.newName));
            showToast("Cập nhật hồ sơ thành công!");
        },
    });
};

// DELETE /internal/delete/:id
export const useDeleteUserProfile = () => {
    return useMutation({
        mutationFn: async (userId: string) => {
            const res = await internalApi.deleteUserProfile({ userId });
            return res.data.result;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["user-profile"] });
            showToast("Xoá hồ sơ người dùng thành công!");
        },
    });
};

// GET /internal/get-reading-history/:userId
export const useGetUserReadingHistory = (userId: string) => {
    return useQuery({
        queryKey: ["user-reading-history", userId],
        queryFn: async () => {
            const res = await internalApi.getUserReadingHistory({ userId });
            return res.data.result ?? [];
        },
        enabled: !!userId,
    });
};