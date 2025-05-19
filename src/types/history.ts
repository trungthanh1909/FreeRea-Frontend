// ===============================
// 📌 Request types
// ===============================

export interface RecordForm {
    userId: string;
    chapterId: string;
    bookId: string;
    lastReadAt: string; // ISO Date string (yyyy-MM-dd)
}

// ===============================
// 📌 Response types
// ===============================

export interface Record {
    userId: string;
    chapterId: string;
    bookId: string;
    lastReadAt: string; // ISO Date string (yyyy-MM-dd)
}
