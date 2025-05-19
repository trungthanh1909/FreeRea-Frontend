// ===============================
// 📌 Request types
// ===============================

export interface BookForm {
    title: string;
    subtitle?: string;
    description?: string;
    author?: string;
    coverUrl?: string;
    isCompleted: boolean;
    categories: string[];
}

// ===============================
// 📌 Response types
// ===============================

export interface Book {
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
    createdAt: string; // ISO 8601 format
    updatedAt: string; // ISO 8601 format
    categories: string[];
}
