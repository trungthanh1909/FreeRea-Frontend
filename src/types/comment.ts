// ===============================
// 📌 Request types
// ===============================

export interface CommentForm {
    bookId: number;
    chapterId: number;
    userId: string;
    content: string;
}

// ===============================
// 📌 Response types
// ===============================

export interface Comment {
    id: string;
    bookId: number;
    chapterId: number;
    userId: string;
    content: string;
    createdAt: string;  // ISO string
    updatedAt: string;  // ISO string
}
