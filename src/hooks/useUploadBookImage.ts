import { useMutation, useQueryClient } from "@tanstack/react-query";
import { uploadBookImage } from "../services/bookService";

const useUploadBookImage = () => {
    const queryClient = useQueryClient();

    return useMutation<void, Error, { bookId: string; file: File }>({
        mutationFn: async ({ bookId, file }) => {
            await uploadBookImage(bookId, file);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
        },
    });
};

export default useUploadBookImage;
