import { useFavouriteStore } from "./useFavouriteStore";
import { useAppSelector } from "../../store/hooks";
import { useGetBookById } from "../bookService";
import { useMemo } from "react";
import { BookResponse } from "../../api/book-service";

export interface MangaItem {
    title: string;
    thumbnail: string;
}

const mapBookToMangaItem = (book: BookResponse): MangaItem => ({
    title: book.title ?? "Không rõ tiêu đề",
    thumbnail: book.coverUrl ?? "/fallback.jpg",
});

export const useFavouriteBooks = () => {
    const { bookIds } = useFavouriteStore();
    const { page, pageSize } = useAppSelector((state) => state.pagination.favorite);

    const paginatedIds = useMemo(() => {
        return bookIds.slice(page * pageSize, (page + 1) * pageSize);
    }, [bookIds, page, pageSize]);

    const bookQueries = paginatedIds.map((id) => useGetBookById(id));
    const isLoading = bookQueries.some((q) => q.isLoading);

    const books = bookQueries
        .map((q) => q.data?.data)
        .filter((b): b is BookResponse => b !== undefined);

    const mangaItems: MangaItem[] = books.map(mapBookToMangaItem);

    return {
        isLoading,
        books,
        mangaItems,
    };
};
