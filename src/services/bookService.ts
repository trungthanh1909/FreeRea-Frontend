import apiClient from "../config/apiClient";
import {Book} from "../types";

export const getAllBooks = () =>
    apiClient.get("/books");

export const getBookById = (id: string) =>
    apiClient.get(`/books/${id}`);

export const searchBooks = (query: string): Promise<Book[]> => {
    return apiClient.get(`/books/search?q=${query}`);
};

export const createBook = (bookData: Partial<Book>) =>
    apiClient.post("/books", bookData);

export const deleteBook = (bookId: string) =>
    apiClient.delete(`/books/${bookId}`);

export const updateBook = (bookId: string, bookData: Partial<Book>) =>
    apiClient.put(`/books/${bookId}`, bookData);

export const getPaginatedBooks = (page: number, limit: number): Promise<{ items: Book[]; totalPages: number }> => {
    return apiClient.get(`/books?page=${page}&limit=${limit}`);
};


export const uploadBookImage = (bookId: string, file: File) => {
    const formData = new FormData();
    formData.append("image", file);

    return apiClient.post(`/books/${bookId}/upload-image`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    });
};
