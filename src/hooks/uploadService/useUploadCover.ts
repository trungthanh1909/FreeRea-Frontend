import { useMutation } from "@tanstack/react-query";
import { UploadControllerApi } from "../../api/upload-service";
import { ApiResponseCoverUploadResponse } from "../../api/upload-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const api = new UploadControllerApi(createServiceConfig());

export const useUploadCover = () => {
    return useMutation<ApiResponseCoverUploadResponse, Error, { bookId: string; file: File }>({
        mutationFn: ({ bookId, file }) =>
            api.uploadCover({ bookId, file }).then((res) => res.data),
        onError: (error) => showToast(error.message, "error"),
    });
};
