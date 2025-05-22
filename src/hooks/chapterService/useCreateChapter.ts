import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InternalChapterControllerApi, ChapterRequest } from "../../api/chapter-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const api = new InternalChapterControllerApi(createServiceConfig());

export const useCreateChapter = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: ChapterRequest) =>
            api.createChapter({ chapterRequest: data }).then((res) => res.data),
        onSuccess: () => {
            showToast("Tạo chapter thành công");
            queryClient.invalidateQueries({ queryKey: ["chapters"] });
        },
    });
};
