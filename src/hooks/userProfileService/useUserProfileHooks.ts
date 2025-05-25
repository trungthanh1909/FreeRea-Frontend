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

const config = createServiceConfig("profile");
const internalApi = new InternalUserProfileControllerApi(config);
const publicApi = new UserProfileControllerApi(config);

// GET public profile by userId
export const useGetUserProfileById = (userId: string) => {
    const dispatch = useDispatch();

    return useQuery({
        queryKey: ["user-profile", userId],
        queryFn: () =>
            publicApi.getUserProfileById({ id: userId }).then((res) => {
                const data = res.data.result;
                if (data) dispatch(setProfile(data));
                return data;
            }),
        enabled: !!userId,
    });
};

// POST /internal/create
export const useCreateUserProfile = () => {
    const dispatch = useDispatch();

    return useMutation({
        mutationFn: (payload: UserProfileCreationRequest) =>
            internalApi
                .createUserProfile({ userProfileCreationRequest: payload })
                .then((res) => res.data.result),
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
        mutationFn: (payload: UserProfileChangeAvatarRequest) =>
            internalApi
                .changeAvatar({ userProfileChangeAvatarRequest: payload })
                .then((res) => res.data.result),
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
        mutationFn: (payload: UserProfileUpdateRequest) =>
            internalApi
                .updateUserProfile({ userProfileUpdateRequest: payload })
                .then((res) => res.data.result),
        onSuccess: (data) => {
            if (data?.newName) dispatch(updateProfileName(data.newName));
            showToast("Cập nhật hồ sơ thành công!");
        },
    });
};

// DELETE /internal/delete/:id
export const useDeleteUserProfile = () => {
    return useMutation({
        mutationFn: (userId: string) =>
            internalApi.deleteUserProfile({ userId }).then((res) => res.data.result),
        onSuccess: async () => {
            await queryClient.invalidateQueries({ queryKey: ["user-profile"] });
            showToast("Xoá hồ sơ người dùng thành công!");
        },
    });
};

// 📚 GET /internal/get-reading-history/:userId
export const useGetUserReadingHistory = (userId: string) => {
    return useQuery({
        queryKey: ["user-reading-history", userId],
        queryFn: () =>
            internalApi
                .getUserReadingHistory({ userId })
                .then((res) => res.data.result ?? []),
        enabled: !!userId,
    });
};