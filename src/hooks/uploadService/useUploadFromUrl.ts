import { useMutation } from "@tanstack/react-query";
import { UploadControllerApi } from "../../api/upload-service";
import { ApiResponseFromUrlUploadResponse, FromUrlUploadRequest } from "../../api/upload-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const api = new UploadControllerApi(createServiceConfig("upload"));

export const useUploadFromUrl = () => {
    return useMutation<ApiResponseFromUrlUploadResponse, Error, FromUrlUploadRequest>({
        mutationFn: (body) =>
            api.uploadFromUrl({ fromUrlUploadRequest: body }).then((res) => res.data),
        onError: (error) => showToast(error.message, "error"),
    });
};
