export interface Chapter {
    id: number;
    title: string;
    content: string;
}

export interface Book {
    id: number;
    title: string;
    author?: string;
    views?: number;
    image: string;
    description: string;
    category: string[];  // 🔹 Thêm dấu ',' và kiểu dữ liệu là string[]
    chapters: Chapter[]; // 🔹 Đã có định nghĩa cho Chapter
}
