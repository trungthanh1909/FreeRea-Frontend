export interface Comment {
    id: number;
    bookId?: number;
    reviewId?: number;
    userId: number;
    content: string;
    createdAt: string;
    user?: {
        id: number;
        name: string;
        avatarUrl?: string;
    };
}

export interface CreateCommentPayload {
    content: string;
    bookId?: number;
    reviewId?: number;
}
