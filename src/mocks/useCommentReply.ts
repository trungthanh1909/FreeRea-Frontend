import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

let mockReplies: { id: number; parentId: string; content: string; username: string }[] = [
    { id: 101, parentId: "1", content: "yes!", username: "User1" },
    { id: 102, parentId: "1", content: "I also think so!", username: "User2" },
];


export const useRepliesByCommentId = (commentId: string) => {
    return useQuery({
        queryKey: ["replies", commentId],
        queryFn: async () => {
            const result = mockReplies.filter(r => r.parentId === commentId);
            return { result };
        },
    });
};

export const useCreateReplyComment = (queryKey: any[]) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({
                               parentId,
                               content,
                               username,
                           }: {
            parentId: string;
            content: string;
            username: string;
        }) => {
            const newReply = {
                id: Date.now(),
                parentId,
                content,
                username,
            };
            mockReplies.push(newReply);
            return newReply;
        },

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey });
        },
    });
};
