import { useQuery } from "@tanstack/react-query";
import { ChapterControllerApi } from "../../api/chapter-service";
import { createServiceConfig } from "../../config/configuration";

const api = new ChapterControllerApi(createServiceConfig());

export const useGetChapterById = (bookId: string, chapterId: string) =>
    useQuery({
        queryKey: ["chapter", bookId, chapterId],
        queryFn: () => api.getChapterById({ bookId, chapterId }).then((res) => res.data),
        enabled: !!bookId && !!chapterId,
    });
