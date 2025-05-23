import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserAPIApi } from "../../api/auth-service";
import {
    UserCreateRequest,
    UserUpdateRequest,
    ApiResponseUserResponse,
    ApiResponseListUserResponse,
    UserResponse,
} from "../../api/auth-service";
import { createServiceConfig } from "../../config/configuration";
import { setProfile, clearProfile } from "../../store/slices/userSlice";
import { showToast } from "../../utils/toast";

const userApi = new UserAPIApi(createServiceConfig());

export const useRegister = () => {
    const navigate = useNavigate();

    return useMutation<ApiResponseUserResponse, Error, UserCreateRequest>({
        mutationFn: (data) =>
            userApi.createUser({ userCreateRequest: data }).then((res) => res.data),
        onSuccess: () => {
            showToast("Đăng ký thành công", "success");
            navigate("/login");
        },
        onError: (err) => {
            showToast(err.message || "Đăng ký thất bại", "error");
        },
    });
};

export const useUserInfo = () => {
    return useQuery<ApiResponseUserResponse>({
        queryKey: ["user", "info"],
        queryFn: async () => {
            try {
                const res = await userApi.getInfo();
                return res.data;
            } catch (err) {
                showToast("Không lấy được thông tin người dùng", "error");
                throw err;
            }
        },
    });
};

export const useUserList = () => {
    return useQuery<ApiResponseListUserResponse>({
        queryKey: ["users"],
        queryFn: async () => {
            try {
                const res = await userApi.findAllUsers();
                return res.data;
            } catch (err) {
                showToast("Không lấy được danh sách người dùng", "error");
                throw err;
            }
        },
    });
};

export const useUserById = (userId: string) => {
    return useQuery<ApiResponseUserResponse>({
        queryKey: ["user", userId],
        queryFn: async () => {
            try {
                const res = await userApi.findUserById({ userId });
                return res.data;
            } catch (err) {
                showToast("Không tìm thấy người dùng", "error");
                throw err;
            }
        },
        enabled: !!userId,
    });
};

export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation<
        ApiResponseUserResponse,
        Error,
        { userId: string; userUpdateRequest: UserUpdateRequest }
    >({
        mutationFn: ({ userId, userUpdateRequest }) =>
            userApi.updateUser({ userId, userUpdateRequest }).then((res) => res.data),
        onSuccess: async () => {
            showToast("Cập nhật người dùng thành công", "success");
            await queryClient.invalidateQueries({ queryKey: ["user"] });
        },
        onError: () => {
            showToast("Cập nhật thất bại", "error");
        },
    });
};