// ===============================
// 📌 Request types
// ===============================

export interface ChapterForm {
    bookId: string;
    chapter: string;
    title: string;
    updatedBy: string;
    imageUrl: string[];        // Tên giữ nguyên như BE
    content?: string;
    chapterNumber?: number;
}

export interface HistoryRecordForm {
    userId: string;
    chapterId: string;
    bookId: string;
    lastReadAt: string; // ISO format
}

export interface UploadViewCountForm {
    bookId: string;
    viewCount: number;
}

// ===============================
// 📌 Response types
// ===============================

export interface Chapter {
    id: string;
    bookId: string;
    chapter: string;
    title: string;
    images: string[];
    updatedBy: string;
    createdBy: string;
    content: string;
    chapterNumber: number;
    createdAt: string;  // ISO format
    updatedAt: string;  // ISO format
}

export interface HistoryRecord {
    userId: string;
    chapterId: string;
    bookId: string;
    lastReadAt: string; // ISO format
    isSuccess: boolean;
}
