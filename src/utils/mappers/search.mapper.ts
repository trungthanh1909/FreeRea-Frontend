import {
    BookIndex,
    BookSearchResult,
    BookIndexDeleteResponse,
} from "../../types";

export function mapBookIndex(data: any): BookIndex {
    return {
        id: data.id,
        title: data.title,
        subtitle: data.subtitle,
        description: data.description,
        author: data.author,
        coverUrl: data.coverUrl,
        isCompleted: data.isCompleted,
        chapterCount: data.chapterCount,
        createdAt: data.createdAt, // yyyy-MM-dd
        updatedAt: data.updatedAt, // yyyy-MM-dd
        categories: data.categories || [],
    };
}

export function mapBookSearchResult(data: any): BookSearchResult {
    return {
        id: data.id,
        title: data.title,
        coverUrl: data.coverUrl,
        chapterCount: data.chapterCount,
        updatedAt: data.updatedAt, // yyyy-MM-dd
    };
}

export function mapBookIndexDeleteResponse(data: any): BookIndexDeleteResponse {
    return {
        id: data.id,
        title: data.title,
        isDeleted: data.isDeleted,
    };
}
