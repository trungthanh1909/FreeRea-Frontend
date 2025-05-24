import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

let mockComments = [
    { id: 1, content: "So good!", chapterId: 0 },
    { id: 2, content: "This part is really touching.", chapterId: 0 },
    { id: 3, content: "Looking forward to the next chapter.", chapterId: 0 },

];

export const useCommentsByChapterId = (chapterId: number) => {
    return useQuery({
        queryKey: ["comments", chapterId],
        queryFn: async () => {
            const result = mockComments.filter(c => c.chapterId === chapterId);
            return { result };
        },
    });
};

export const useCreateComment = (queryKey: any[]) => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ chapterId, content }: { chapterId: number; content: string }) => {
            const newComment = {
                id: Date.now(),
                chapterId,
                content,
            };
            mockComments.push(newComment);
            return newComment;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey });
        },
    });
};
