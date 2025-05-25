import { useMutation } from "@tanstack/react-query";
import { UploadControllerApi } from "../../api/upload-service";
import { ApiResponseUploadImageResponse } from "../../api/upload-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const api = new UploadControllerApi(createServiceConfig("upload"));

export const useUploadImage = () => {
    return useMutation<ApiResponseUploadImageResponse, Error, File>({
        mutationFn: (file) => api.uploadImage({ file }).then((res) => res.data),
        onError: (error) => showToast(error.message, "error"),
    });
};