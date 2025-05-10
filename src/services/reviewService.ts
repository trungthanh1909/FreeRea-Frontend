import apiClient from "../config/apiClient";

export const getReviewsForBook = (bookId: string) =>
    apiClient.get(`/reviews/book/${bookId}`);

export const submitReview = (bookId: string, content: string, rating: number) =>
    apiClient.post("/reviews", {
        bookId,
        content,
        rating,
    });
