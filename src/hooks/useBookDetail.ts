import { useQuery } from "@tanstack/react-query";
import { getBookById } from "../services/bookService";
import { Book } from "../types";

const useBookDetail = (id: string) => {
    return useQuery<Book>({
        queryKey: ["book", id],
        queryFn: async () => {
            const res = await getBookById(id);
            return res.data;
        },
        enabled: !!id,
    });
};

export default useBookDetail;
