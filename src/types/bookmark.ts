// ===============================
// 📌 Request types
// ===============================

export interface BookmarkForm {
    userId: number;
    bookId: number;
    chapterNumber: number;
}

// ===============================
// 📌 Response types
// ===============================

export interface Bookmark {
    id: string;
    userId: number;
    bookId: number;
    chapterNumber: number;
    createdAt: string; // ISO format
}
