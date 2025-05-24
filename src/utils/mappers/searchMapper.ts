import { BookSearchingResult } from "../../api/search-service";

/** Kiểu dùng cho dropdown search */
export interface SearchBookItem {
    id: string;
    title: string;
    image: string;
}

/** Kiểu dùng cho card grid hiển thị kết quả */
export interface BookCardItem {
    id: string;
    title: string;
    image: string;
    author: string;
    chapterCount: number;
    categories: string[];
}

export const mapSearchResultToBookItem = (book: BookSearchingResult): SearchBookItem => ({
    id: book.id ?? "",
    title: book.title ?? "Không rõ tiêu đề",
    image: book.coverUrl ?? "default.jpg",
});

export const mapSearchResultToCardItem = (book: BookSearchingResult): BookCardItem => ({
    id: book.id ?? "",
    title: book.title ?? "Không rõ tiêu đề",
    image: book.coverUrl ?? "default.jpg",
    author: book.author ?? "Không rõ tác giả",
    chapterCount: book.chapterCount ?? 0,
    categories: book.categories ?? [],
});
