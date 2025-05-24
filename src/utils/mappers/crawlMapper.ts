import type { Metadata } from "../../api/crawl-service";

export interface FormCrawlInput {
    title: string;
    author?: string;
    categories?: string[];
    chapters: string[];
}

export const buildMetadataFromForm = (form: FormCrawlInput): Metadata => {
    return {
        info: {
            title: form.title,
            author: form.author ?? "Unknown",
            categories: form.categories ?? [],
            coverUrl: "", // Nếu chưa có ảnh từ form thì để trống
        },
        chapters: form.chapters.map((title, index) => ({
            id: `ch${index + 1}`,
            chapter: `Chapter ${index + 1}`,
            title: title,
            images: [], // Nếu form chưa upload ảnh thì để trống
        })),
    };
};