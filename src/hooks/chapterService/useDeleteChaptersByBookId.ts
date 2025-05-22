import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InternalChapterControllerApi } from "../../api/chapter-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const api = new InternalChapterControllerApi(createServiceConfig());

export const useDeleteChaptersByBookId = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (bookId: string) => api.deleteChaptersByBookId({ bookId }).then((res) => res.data),
        onSuccess: () => {
            showToast("Đã xoá tất cả chapter của truyện");
            queryClient.invalidateQueries({ queryKey: ["chapters"] });
        },
    });
};
