// ===============================
// 📌 Data Models
// ===============================

export interface BookInfo {
    title: string;
    author: string;
    description: string;
    categories: string[];
    coverUrl: string;
}

export interface ChapterCrawl {
    id: string;
    chapter: string;
    title: string;
    images: string[];
}

export interface Metadata {
    info: BookInfo;
    chapters: ChapterCrawl[];
}

// ===============================
// 📌 Request Types
// ===============================

export interface CrawlBookForm {
    title: string;
    description: string;
    author: string;
    categoryId: string[];
    coverUrl: string;
}

export interface CrawlChapterForm {
    bookId: string;
    title: string;
    content?: string;
    chapterNumber: number;
    imageUrls: string[];
}

export interface UploadForm {
    url: string;
    bookId: string;
    chapterId: string;
    name: string;
}

// ===============================
// 📌 Response Types
// ===============================

export interface CrawlBook {
    id: string;
    bookId: string;
    title: string;
    subtitle: string;
    description: string;
    author: string;
    coverUrl: string;
    isCompleted: boolean;
    createdBy: string;
    lastUpdatedBy: string;
    chapterCount: number;
    viewCount: number;
    averageRating: number;
    createdAt: string;
    updatedAt: string;
}

export interface CrawlChapter {
    id: string;
    bookId: string;
    title: string;
    content?: string;
    chapterNumber: number;
    imageUrls: string[];
    createdAt: string;
    updatedAt: string;
}

export interface CrawlResult {
    info: BookInfo;
    chapters: ChapterCrawl[];
    success: boolean;
}

export interface CrawlUploadResponse {
    filename: string;
    url: string;
}
