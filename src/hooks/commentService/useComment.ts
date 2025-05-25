import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { CommentControllerApiFactory } from "../../api/comment-service/apis/comment-controller-api";
import {
    CommentRequest,
    ApiResponseCommentResponse,
    ApiResponseListCommentResponse
} from "../../api/comment-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const commentApi = CommentControllerApiFactory(createServiceConfig("comment"));

// Lấy comment theo Book ID
export const useCommentsByBookId = (bookId: number) => {
    return useQuery<ApiResponseListCommentResponse, Error>({
        queryKey: ["comments", "book", bookId],
        queryFn: () => commentApi.getByBookId({ bookId }).then(res => res.data),
        enabled: !!bookId,
    });
};

// Lấy comment theo Chapter ID
export const useCommentsByChapterId = (chapterId: number) => {
    return useQuery<ApiResponseListCommentResponse, Error>({
        queryKey: ["comments", "chapter", chapterId],
        queryFn: () => commentApi.getByChapterId({ chapterId }).then(res => res.data),
        enabled: !!chapterId,
    });
};

// Tạo comment
export const useCreateComment = (queryKeyToInvalidate: unknown[]) => {
    const queryClient = useQueryClient();

    return useMutation<ApiResponseCommentResponse, Error, CommentRequest>({
        mutationFn: (data) => commentApi.create({ commentRequest: data }).then(res => res.data),
        onSuccess: () => {
            showToast("Bình luận đã được gửi");
            queryClient.invalidateQueries({ queryKey: queryKeyToInvalidate });
        },
        onError: (error) => {
            showToast(`Gửi bình luận thất bại: ${error.message}`, "error");
        }
    });
};

// Xoá comment
export const useDeleteComment = (queryKeyToInvalidate: unknown[]) => {
    const queryClient = useQueryClient();

    return useMutation<void, Error, string>({
        mutationFn: (id) => commentApi._delete({ id }).then(() => undefined),
        onSuccess: () => {
            showToast("Đã xoá bình luận");
            queryClient.invalidateQueries({ queryKey: queryKeyToInvalidate });
        },
    });
};
