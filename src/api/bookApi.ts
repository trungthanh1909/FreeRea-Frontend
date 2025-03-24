import axios from "axios";

const API_URL = "https://api.example.com/books";

export const getBooks = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

export const getBookById = async (bookId: string) => {
    const response = await axios.get(`${API_URL}/${bookId}`);
    return response.data;
};
