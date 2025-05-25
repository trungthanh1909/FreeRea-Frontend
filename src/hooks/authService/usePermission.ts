import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PermissionAPIApi } from "../../api/auth-service";
import {
    PermissionRequest,
    ApiResponseListPermissionResponse,
    ApiResponsePermissionResponse,
    ApiResponseVoid,
} from "../../api/auth-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const permissionApi = new PermissionAPIApi(createServiceConfig("auth"));

export const usePermissions = () => {
    return useQuery<ApiResponseListPermissionResponse>({
        queryKey: ["permissions"],
        queryFn: async () => {
            try {
                const res = await permissionApi.findAllPermissions();
                return res.data;
            } catch (err) {
                showToast("Không lấy được danh sách quyền", "error");
                throw err;
            }
        },
    });
};

export const useCreatePermission = () => {
    const queryClient = useQueryClient();

    return useMutation<ApiResponsePermissionResponse, Error, PermissionRequest>({
        mutationFn: (data) =>
            permissionApi.createPermission({ permissionRequest: data }).then((res) => res.data),
        onSuccess: async () => {
            showToast("Tạo quyền thành công", "success");
            await queryClient.invalidateQueries({ queryKey: ["permissions"] });
        },
        onError: () => {
            showToast("Tạo quyền thất bại", "error");
        },
    });
};

export const useDeletePermission = () => {
    const queryClient = useQueryClient();

    return useMutation<ApiResponseVoid, Error, string>({
        mutationFn: (permissionId) =>
            permissionApi.deletePermission({ permissionId }).then((res) => res.data),
        onSuccess: async () => {
            showToast("Xoá quyền thành công", "success");
            await queryClient.invalidateQueries({ queryKey: ["permissions"] });
        },
        onError: () => {
            showToast("Xoá quyền thất bại", "error");
        },
    });
};
