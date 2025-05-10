import apiClient from "../config/apiClient";
import { Book, User, Review, ApiResponse } from "../types";

export const searchService = {
    searchBooks: (q: string) =>
        apiClient.get<ApiResponse<Book[]>>("/search/books", { params: { q } }),

    searchUsers: (q: string) =>
        apiClient.get<ApiResponse<User[]>>("/search/users", { params: { q } }),

    searchReviews: (q: string) =>
        apiClient.get<ApiResponse<Review[]>>("/search/reviews", { params: { q } }),
};
