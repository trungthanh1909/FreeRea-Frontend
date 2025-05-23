import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { ExternalCommentControllerApiFactory } from "../../api/comment-service";
import {
    CommentReplyRequest,
    CommentRootRequest,
    ApiResponseCommentResponse,
    ApiResponseListCommentResponse
} from "../../api/comment-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";

const externalApi = ExternalCommentControllerApiFactory(createServiceConfig());

// Tạo bình luận gốc (root comment)
export const useCreateRootComment = (queryKeyToInvalidate: unknown[]) => {
    const queryClient = useQueryClient();

    return useMutation<ApiResponseCommentResponse, Error, CommentRootRequest>({
        mutationFn: (data) => externalApi.createRoot({ commentRootRequest: data }).then(res => res.data),
        onSuccess: () => {
            showToast("Bình luận đã được tạo");
            queryClient.invalidateQueries({ queryKey: queryKeyToInvalidate });
        },
    });
};

// Tạo phản hồi (reply comment)
export const useCreateReplyComment = (queryKeyToInvalidate: unknown[]) => {
    const queryClient = useQueryClient();

    return useMutation<ApiResponseCommentResponse, Error, CommentReplyRequest>({
        mutationFn: (data) => externalApi.createReply({ commentReplyRequest: data }).then(res => res.data),
        onSuccess: () => {
            showToast("Phản hồi đã được gửi");
            queryClient.invalidateQueries({ queryKey: queryKeyToInvalidate });
        },
    });
};

// Lấy replies theo comment ID
export const useRepliesByCommentId = (commentId: string) => {
    return useQuery<ApiResponseListCommentResponse, Error>({
        queryKey: ["comments", "replies", commentId],
        queryFn: () => externalApi.getReplies({ id: commentId }).then(res => res.data),
        enabled: !!commentId,
    });
};

// Cập nhật nội dung phản hồi
export const useUpdateReply = (queryKeyToInvalidate: unknown[]) => {
    const queryClient = useQueryClient();

    return useMutation<ApiResponseCommentResponse, Error, { id: string; data: CommentReplyRequest }>({
        mutationFn: ({ id, data }) =>
            externalApi.update({ id, commentReplyRequest: data }).then(res => res.data),
        onSuccess: () => {
            showToast("Đã cập nhật bình luận");
            queryClient.invalidateQueries({ queryKey: queryKeyToInvalidate });
        },
    });
};
