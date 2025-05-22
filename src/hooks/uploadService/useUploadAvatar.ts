import { useMutation } from "@tanstack/react-query";
import { UploadControllerApi } from "../../api/upload-service";
import { ApiResponseAvatarUploadResponse } from "../../api/upload-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const api = new UploadControllerApi(createServiceConfig());

export const useUploadAvatar = () => {
    return useMutation<ApiResponseAvatarUploadResponse, Error, { userId: string; file: File }>({
        mutationFn: ({ userId, file }) =>
            api.uploadAvatar({ userId, file }).then((res) => res.data),
        onError: (error) => showToast(error.message, "error"),
    });
};
