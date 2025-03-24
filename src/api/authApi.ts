 import axios from "axios";

const API_URL = "https://api.example.com/auth"; // Đổi thành URL API thật của bạn

export const loginUser = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

export const registerUser = async (email: string, password: string) => {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
};

export const logoutUser = () => {
    localStorage.removeItem("token");
};
