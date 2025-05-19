import { Book } from "../../types";

type RawBookResponse = {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    author?: string;
    coverUrl?: string;
    isCompleted: boolean;
    createdBy: string;
    lastUpdatedBy: string;
    chapterCount: number;
    viewCount: number;
    averageRating: number;
    createdAt: string | Date;
    updatedAt: string | Date;
    categories: string[];
};

export function mapBook(data: RawBookResponse): Book {
    return {
        ...data,
        createdAt: new Date(data.createdAt).toISOString(),
        updatedAt: new Date(data.updatedAt).toISOString(),
    };
}

// Nếu cần map danh sách:
export function mapBooks(data: RawBookResponse[]): Book[] {
    return data.map(mapBook);
}
