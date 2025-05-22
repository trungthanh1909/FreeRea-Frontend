import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InternalBookControllerApi } from "../../api/reading-service";
import { createServiceConfig } from "../../config/configuration";
import { BookRequest } from "../../api/reading-service";
import { showToast } from "../../utils/toast";

const internalApi = new InternalBookControllerApi(createServiceConfig());

export const useCreateBook = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: BookRequest) => internalApi.createBook({ bookRequest: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["external-books", "all"] });
            showToast("Tạo sách thành công");
        },
    });
};

export const useUpdateBook = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: BookRequest }) =>
            internalApi.updateBook({ id, bookRequest: data }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["external-books"] });
            showToast("Cập nhật sách thành công");
        },
    });
};

export const useDeleteBook = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => internalApi.deleteBook({ id }),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["external-books", "all"] });
            showToast("Xóa sách thành công");
        },
    });
};
