import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InternalChapterControllerApi } from "../../api/chapter-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const api = new InternalChapterControllerApi(createServiceConfig());

export const useDeleteChapter = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => api.deleteChapter({ id }).then((res) => res.data),
        onSuccess: () => {
            showToast("Xoá chapter thành công");
            queryClient.invalidateQueries({ queryKey: ["chapters"] });
        },
    });
};
