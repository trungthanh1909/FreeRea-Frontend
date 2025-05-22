import { useQuery } from "@tanstack/react-query";
import { ChapterControllerApi } from "../../api/chapter-service";
import { createServiceConfig } from "../../config/configuration";

const api = new ChapterControllerApi(createServiceConfig());

export const useGetChaptersByBookId = (bookId: string) =>
    useQuery({
        queryKey: ["chapters", bookId],
        queryFn: () => api.getChaptersByBookId({ bookId }).then((res) => res.data),
        enabled: !!bookId,
    });
