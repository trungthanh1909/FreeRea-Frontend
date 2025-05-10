import { useQuery } from "@tanstack/react-query";
import { getAllBooks } from "../services/bookService";
import { Book } from "../types";

const useBooks = () => {
    return useQuery<Book[]>({
        queryKey: ["books"],
        queryFn: async () => {
            const res = await getAllBooks();
            return res.data;
        },
    });
};

export default useBooks;
