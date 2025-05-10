import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBook } from "../services/bookService";

const useDeleteBook = () => {
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: async (bookId) => {
            await deleteBook(bookId);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
        },
    });
};

export default useDeleteBook;
