import apiClient from "../config/apiClient";
import { Comment, CreateCommentPayload, ApiResponse } from "../types";

export const commentService = {
    getCommentsByBookId: (bookId: number) =>
        apiClient.get<ApiResponse<Comment[]>>(`/books/${bookId}/comments`),

    getCommentsByReviewId: (reviewId: number) =>
        apiClient.get<ApiResponse<Comment[]>>(`/reviews/${reviewId}/comments`),

    createComment: (data: CreateCommentPayload) =>
        apiClient.post<ApiResponse<Comment>>("/comments", data),

    deleteComment: (commentId: number) =>
        apiClient.delete<ApiResponse<null>>(`/comments/${commentId}`),
};
