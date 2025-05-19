import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {fetchAllBooks, fetchBookById, createBook, updateBook, deleteBook} from "../services/bookService";
import { BookRequest } from "../types";
import { showToast } from "../utils/toast";

// Hook lấy danh sách tất cả sách
export const useBooks = () => {
    return useQuery({
        queryKey: ["books"],
        queryFn: fetchAllBooks,
    });
};

// Hook lấy 1 sách theo ID
export const useBookById = (id: string) => {
    return useQuery({
        queryKey: ["books", id],
        queryFn: () => fetchBookById(id),
        enabled: !!id,
    });
};

// Hook tạo sách
export const useCreateBook = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (payload: BookRequest) => createBook(payload),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
            showToast("Tạo sách thành công", "success");
        },
    });
};

// Hook cập nhật sách
export const useUpdateBook = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: string; data: BookRequest }) =>
            updateBook(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
            showToast("Cập nhật sách thành công", "success");
        },
    });
};

// Hook xoá sách
export const useDeleteBook = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: string) => deleteBook(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["books"] });
            showToast("Xoá sách thành công", "success");
        },
    });
};
