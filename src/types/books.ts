export interface Chapter {
    id: number;
    title: string;
    content: string;
    order?: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface Book {
    id: number;
    title: string;
    author?: string;
    views?: number;
    image: string;
    description: string;
    category: string[];
    chapters: Chapter[];
    createdAt?: string;
    updatedAt?: string;
    rating?: number;
    isFeatured?: boolean;
}
