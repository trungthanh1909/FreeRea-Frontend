import { useQuery } from "@tanstack/react-query";
import { ChapterControllerApi } from "../../api/chapter-service";
import { createServiceConfig } from "../../config/configuration";

const api = new ChapterControllerApi(createServiceConfig());

export const useGetChapterByBookIdAndNumber = (bookId: string, chapterNumber: number) =>
    useQuery({
        queryKey: ["chapter", bookId, chapterNumber],
        queryFn: () =>
            api.getChapterByBookIdAndNumber({ bookId, chapterNumber }).then((res) => res.data),
        enabled: !!bookId && chapterNumber !== undefined,
    });
