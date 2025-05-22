import { useQuery } from "@tanstack/react-query";
import { ChapterControllerApi } from "../../api/chapter-service";
import { createServiceConfig } from "../../config/configuration";

const api = new ChapterControllerApi(createServiceConfig());

export const useCountChaptersByBookId = (bookId: string) =>
    useQuery({
        queryKey: ["chapter-count", bookId],
        queryFn: () => api.countChaptersByBookId({ bookId }).then((res) => res.data),
        enabled: !!bookId,
    });
