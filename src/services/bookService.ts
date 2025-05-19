import apiClient from "../config/apiClient";
import { BookRequest, BookResponse } from "../types";

// Lấy tất cả sách
export const fetchAllBooks = (): Promise<BookResponse[]> => {
    return apiClient.get("/books");
};

// Lấy sách theo ID
export const fetchBookById = (id: string): Promise<BookResponse> => {
    return apiClient.get(`/books/${id}`);
};

// Tạo sách mới
export const createBook = (payload: BookRequest): Promise<BookResponse> => {
    return apiClient.post("/internal", payload);
};

// Cập nhật sách
export const updateBook = (
    id: string,
    payload: BookRequest
): Promise<BookResponse> => {
    return apiClient.put(`/internal/update/${id}`, payload);
};

// Xoá sách
export const deleteBook = (id: string): Promise<void> => {
    return apiClient.delete(`/internal/delete/${id}`);
};