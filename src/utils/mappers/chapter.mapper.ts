import { Chapter, HistoryRecord } from "../../types";

// Dữ liệu raw từ backend
type RawChapterResponse = {
    id: string;
    bookId: string;
    chapter: string;
    title: string;
    images: string[];
    UpdateBy: string;       // 👈 tên khác casing
    createdBy: string;
    content: string;
    chapterNumber: number;
    createdAt: string | Date;
    updatedAt: string | Date;
};

type RawHistoryRecordResponse = {
    userId: string;
    chapterId: string;
    bookId: string;
    lastReadAt: string | Date;
    isSuccess: boolean;
};

// Mapper cho Chapter
export function mapChapter(data: RawChapterResponse): Chapter {
    return {
        id: data.id,
        bookId: data.bookId,
        chapter: data.chapter,
        title: data.title,
        images: data.images,
        updatedBy: data.UpdateBy, // 👈 chuyển từ UpdateBy → updatedBy
        createdBy: data.createdBy,
        content: data.content,
        chapterNumber: data.chapterNumber,
        createdAt: new Date(data.createdAt).toISOString(),
        updatedAt: new Date(data.updatedAt).toISOString(),
    };
}

export function mapChapters(data: RawChapterResponse[]): Chapter[] {
    return data.map(mapChapter);
}

// Mapper cho HistoryRecord
export function mapHistoryRecord(data: RawHistoryRecordResponse): HistoryRecord {
    return {
        ...data,
        lastReadAt: new Date(data.lastReadAt).toISOString(),
    };
}
