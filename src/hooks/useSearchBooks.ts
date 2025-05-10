import { useQuery, queryOptions } from "@tanstack/react-query";
import { searchBooks } from "../services/bookService";
import { Book } from "../types";

const useSearchBooks = (query: string) => {
    const result = useQuery(
        queryOptions<Book[], Error>({
            queryKey: ["searchBooks", query],
            queryFn: () => searchBooks(query),
            enabled: !!query,
            retry: 1,
            refetchOnWindowFocus: false,
        })
    );

    return {
        books: result.data ?? [],
        loading: result.isLoading,
        error: result.isError ? result.error.message : null,
    };
};

export default useSearchBooks;
