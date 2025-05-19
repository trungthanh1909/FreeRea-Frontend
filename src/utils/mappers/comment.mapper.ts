import { Comment } from "../../types";

// Raw data từ backend
type RawCommentResponse = {
    id: string;
    bookId: number;
    chapterId: number;
    userId: string;
    content: string;
    createdAt: string | Date;
    updatedAt: string | Date;
};

// Mapper function: Chuẩn hóa dữ liệu từ backend
export function mapComment(data: RawCommentResponse): Comment {
    return {
        ...data,
        createdAt: new Date(data.createdAt).toISOString(),
        updatedAt: new Date(data.updatedAt).toISOString(),
    };
}

export function mapComments(data: RawCommentResponse[]): Comment[] {
    return data.map(mapComment);
}
