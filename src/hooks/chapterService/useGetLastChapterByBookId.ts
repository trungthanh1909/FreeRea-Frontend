import { useQuery } from "@tanstack/react-query";
import { ChapterControllerApi } from "../../api/chapter-service";
import { createServiceConfig } from "../../config/configuration";

const api = new ChapterControllerApi(createServiceConfig());

export const useGetLastChapterByBookId = (bookId: string) =>
    useQuery({
        queryKey: ["chapter-last", bookId],
        queryFn: () => api.getLastChapterByBookId({ bookId }).then((res) => res.data),
        enabled: !!bookId,
    });
