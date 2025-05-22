import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InternalChapterControllerApi, ChapterRequest } from "../../api/chapter-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const api = new InternalChapterControllerApi(createServiceConfig());

export const useUpdateChapter = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, chapterRequest }: { id: string; chapterRequest: ChapterRequest }) =>
            api.updateChapter({ id, chapterRequest }).then((res) => res.data),
        onSuccess: () => {
            showToast("Cập nhật chapter thành công");
            queryClient.invalidateQueries({ queryKey: ["chapters"] });
        },
    });
};
