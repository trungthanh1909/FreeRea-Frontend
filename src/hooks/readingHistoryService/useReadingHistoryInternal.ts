import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InternalHistoryRecordControllerApi } from "../../api/readingHistory-service";
import { RecordRequest, ApiResponseRecordResponse } from "../../api/readingHistory-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const internalApi = new InternalHistoryRecordControllerApi(createServiceConfig());

export const useSaveReadingHistory = () => {
    const queryClient = useQueryClient();

    return useMutation<ApiResponseRecordResponse["result"], Error, RecordRequest>({
        mutationFn: (payload) =>
            internalApi.saveRecord({ recordRequest: payload }).then((res) => res.data.result),
        onSuccess: () => {
            showToast("Đã lưu lịch sử đọc", "success");
            queryClient.invalidateQueries({ queryKey: ["reading-history"] });
        },
        onError: (error) => {
            console.error("Save error:", error);
            showToast("Lưu lịch sử đọc thất bại", "error");
        },
    });
};
