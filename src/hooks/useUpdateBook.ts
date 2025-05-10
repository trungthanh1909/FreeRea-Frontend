import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBook } from "../services/bookService";
import { Book } from "../types";

const useUpdateBook = () => {
    const queryClient = useQueryClient();

    return useMutation<void, Error, { bookId: string; data: Partial<Book> }>({
        mutationFn: async ({ bookId, data }) => {
            await updateBook(bookId, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
        },
    });
};

export default useUpdateBook;
