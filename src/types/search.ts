// ===============================
// 📌 Request types
// ===============================

export interface BookIndexDeleteForm {
    id: string;
    title: string;
}

export interface BookIndexUpdateForm {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    author?: string;
    coverUrl?: string;
    isCompleted: boolean;
    chapterCount: number;
    createdAt: string; // yyyy-MM-dd
    updatedAt: string; // yyyy-MM-dd
    categories: string[];
}

// ===============================
// 📌 Response types
// ===============================

export interface BookIndexDeleteResponse {
    id: string;
    title: string;
    isDeleted: boolean;
}

export interface BookIndex {
    id: string;
    title: string;
    subtitle?: string;
    description?: string;
    author?: string;
    coverUrl?: string;
    isCompleted: boolean;
    chapterCount: number;
    createdAt: string; // yyyy-MM-dd
    updatedAt: string; // yyyy-MM-dd
    categories: string[];
}

export interface BookSearchResult {
    id: string;
    title: string;
    coverUrl: string;
    chapterCount: number;
    updatedAt: string; // yyyy-MM-dd
}
