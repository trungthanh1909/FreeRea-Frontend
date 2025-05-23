import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
    ExternalBookAPIsApi,
    InternalBookControllerApi,
    ApiResponseBookResponse,
    ApiResponseBookCreationResponse,
    ApiResponseVoid,
    ApiResponseListBookResponse,
    BookCreationRequest,
    BookRequest,
} from "../../api/book-service";
import { createServiceConfig } from "../../config/configuration";
import { showToast } from "../../utils/toast";
import { AxiosResponse } from "axios";

const externalApi = new ExternalBookAPIsApi(createServiceConfig());
const internalApi = new InternalBookControllerApi(createServiceConfig());

// Lấy tất cả sách
export const useGetAllBooks = () => {
    return useQuery<ApiResponseListBookResponse, Error>({
        queryKey: ["books"],
        queryFn: async (): Promise<ApiResponseListBookResponse> => {
            try {
                const res = await externalApi.getAllBooks() as unknown as AxiosResponse<ApiResponseListBookResponse>;
                return res.data;
            } catch (err: any) {
                showToast(err.message || "Lỗi lấy danh sách sách", "error");
                throw err;
            }
        },
    });
};

// Lấy thông tin sách theo ID
export const useGetBookById = (id: string) => {
    return useQuery<ApiResponseBookResponse, Error>({
        queryKey: ["book", id],
        queryFn: async () => {
            try {
                const res = await externalApi.getBookById({ id });
                return res.data;
            } catch (err: any) {
                showToast(err.message || "Lỗi lấy thông tin sách", "error");
                throw err;
            }
        },
        enabled: !!id,
    });
};

// Tạo sách mới
export const useCreateBook = () => {
    const queryClient = useQueryClient();
    return useMutation<ApiResponseBookCreationResponse, Error, BookCreationRequest>({
        mutationFn: (data) => internalApi.createBook({ bookCreationRequest: data }).then((res) => res.data),
        onSuccess: () => {
            showToast("Tạo sách thành công!", "success");
            queryClient.invalidateQueries({ queryKey: ["books"] });
            queryClient.invalidateQueries({ queryKey: ["book"] });
        },
        onError: (err) => showToast(err.message, "error"),
    });
};

// Cập nhật sách
export const useUpdateBook = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation<ApiResponseBookResponse, Error, BookRequest>({
        mutationFn: (data) => internalApi.updateBook({ id, bookRequest: data }).then((res) => res.data),
        onSuccess: () => {
            showToast("Cập nhật sách thành công!", "success");
            queryClient.invalidateQueries({ queryKey: ["book", id] });
            queryClient.invalidateQueries({ queryKey: ["books"] });
        },
        onError: (err) => showToast(err.message, "error"),
    });
};

// Xóa sách
export const useDeleteBook = (id: string) => {
    const queryClient = useQueryClient();
    return useMutation<ApiResponseVoid, Error>({
        mutationFn: () => internalApi.deleteBook({ id }).then((res) => res.data),
        onSuccess: () => {
            showToast("Xóa sách thành công!", "success");
            queryClient.invalidateQueries({ queryKey: ["books"] });
            queryClient.invalidateQueries({ queryKey: ["book", id] });
        },
        onError: (err) => showToast(err.message, "error"),
    });
};

// Kiểm tra sách tồn tại
export const useCheckBookExists = (bookId: string) => {
    return useQuery<boolean, Error>({
        queryKey: ["book-exists", bookId],
        queryFn: async () => {
            try {
                const res = await internalApi.checkBookExists({ bookId });
                return res.data;
            } catch (err: any) {
                showToast(err.message || "Lỗi kiểm tra sách tồn tại", "error");
                throw err;
            }
        },
        enabled: !!bookId,
    });
};
