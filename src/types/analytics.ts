// ===============================
// 📌 Request types
// ===============================

export interface ReadingLogForm {
    userId: number;
    bookId: number;
    chapterId: number;
    duration: number; // Thời gian đọc (giây hoặc phút tùy theo backend)
}

// ===============================
// 📌 Response types
// ===============================

export interface ReadingLog {
    id: string;              // MongoDB ID
    userId: number;
    bookId: number;
    chapterId: number;
    duration: number;
    timestamp: string;       // ISO 8601 string
}
