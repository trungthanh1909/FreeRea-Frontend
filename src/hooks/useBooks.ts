import { useState, useEffect } from "react";
import { fetchBookList } from "../mocks/apiMocks";
import { Book } from "../types/books";

const useBooks = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchBookList()
            .then(setBooks)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, []);

    return { books, loading, error };
};

export default useBooks;
