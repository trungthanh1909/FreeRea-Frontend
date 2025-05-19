import { Bookmark } from "../../types";

type RawBookmarkResponse = {
    id: string;
    userId: number;
    bookId: number;
    chapterNumber: number;
    createdAt: string | Date;
};

export function mapBookmark(data: RawBookmarkResponse): Bookmark {
    return {
        ...data,
        createdAt: new Date(data.createdAt).toISOString(),
    };
}

export function mapBookmarks(data: RawBookmarkResponse[]): Bookmark[] {
    return data.map(mapBookmark);
}
