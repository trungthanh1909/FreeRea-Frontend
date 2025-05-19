import {
    CrawlBook,
    CrawlChapter,
    CrawlResult,
    CrawlUploadResponse,
    BookInfo,
    ChapterCrawl,
} from "../../types";

type RawCrawlBookResponse = Omit<CrawlBook, "createdAt" | "updatedAt"> & {
    createdAt: string | Date;
    updatedAt: string | Date;
};

type RawCrawlChapterResponse = Omit<CrawlChapter, "createdAt" | "updatedAt"> & {
    createdAt: string | Date;
    updatedAt: string | Date;
};

// 🧩 Book mapper
export function mapCrawlBook(data: RawCrawlBookResponse): CrawlBook {
    return {
        ...data,
        createdAt: new Date(data.createdAt).toISOString(),
        updatedAt: new Date(data.updatedAt).toISOString(),
    };
}

// 🧩 Chapter mapper
export function mapCrawlChapter(data: RawCrawlChapterResponse): CrawlChapter {
    return {
        ...data,
        createdAt: new Date(data.createdAt).toISOString(),
        updatedAt: new Date(data.updatedAt).toISOString(),
    };
}

// 🧩 Crawl metadata mapper
export function mapCrawlMetadata(data: CrawlResult): CrawlResult {
    return {
        ...data,
        info: { ...data.info },
        chapters: data.chapters.map((chapter: ChapterCrawl) => ({ ...chapter })),
        success: data.success,
    };
}
