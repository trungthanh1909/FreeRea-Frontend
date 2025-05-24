import { useAutocompleteTitle, useSearchByTitle, useSearchByAuthor } from "./useSearch";
import { BookSearchingResult } from "../../api/search-service";

export const useSearchByKeyword = (keyword: string) => {
    const auto = useAutocompleteTitle(keyword);
    const title = useSearchByTitle(keyword);
    const author = useSearchByAuthor(keyword);

    // Gộp và loại trùng kết quả
    const mergedResults: BookSearchingResult[] = [
        ...(auto.data?.data ?? []),
        ...(title.data?.data ?? []),
        ...(author.data?.data ?? []),
    ];

    // Loại trùng ID nếu cần
    const uniqueResults = Array.from(
        new Map(mergedResults.map((b) => [b.id, b])).values()
    );

    return {
        data: uniqueResults,
        isLoading: auto.isLoading || title.isLoading || author.isLoading,
        isFetching: auto.isFetching || title.isFetching || author.isFetching,
        error: auto.error || title.error || author.error,
    };
};
