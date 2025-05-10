import { useQuery, queryOptions } from "@tanstack/react-query";
import { getPaginatedBooks } from "../services/bookService";
import { Book } from "../types";

type PaginatedBooksResponse = {
    items: Book[];
    totalPages: number;
};

const usePagination = (page: number, limit: number = 10) => {
    const result = useQuery(
        queryOptions<PaginatedBooksResponse, Error>({
            queryKey: ["books", page, limit],
            queryFn: () => getPaginatedBooks(page, limit),
            // ✅ V5 support
            gcTime: 5 * 60 * 1000, // optional: 5 phút cache
            staleTime: 1000, // optional: dữ liệu cũ được chấp nhận 1s
            placeholderData: () => undefined, // fix TS warning nếu cần
            refetchOnWindowFocus: false,
            retry: 1,
            meta: {
                keepPreviousData: true, // 👈 V5: đưa vào meta
            },
        })
    );

    return {
        books: result.data?.items ?? [],
        totalPages: result.data?.totalPages ?? 1,
        loading: result.isLoading,
        error: result.isError ? result.error.message : null,
    };
};

export default usePagination;
