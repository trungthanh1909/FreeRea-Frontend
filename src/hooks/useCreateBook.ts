import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBook } from "../services/bookService";
import { Book } from "../types";

const useCreateBook = () => {
    const queryClient = useQueryClient();

    return useMutation<Book, Error, Partial<Book>>({
        mutationFn: async (bookData) => {
            const res = await createBook(bookData);
            return res.data;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
        },
    });
};

export default useCreateBook;
