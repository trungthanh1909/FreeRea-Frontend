import axios from "axios";
import { ApiResponse } from "../types";
import { showToast } from "../utils/toast";

const apiClient = axios.create({
    baseURL: "https://api.mybookapp.com",
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => {
        const resData = response.data as ApiResponse<any>;
        return resData.data;
    },
    (error) => {
        const status = error.response?.status;

        if (status === 401) {
            showToast("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.", "error");

            window.location.href = "/AuthModal";
        } else if (status === 403) {
            showToast("Bạn không có quyền truy cập tài nguyên này.", "error");
        } else if (status >= 500) {
            showToast("Lỗi hệ thống. Vui lòng thử lại sau.", "error");
        } else {
            showToast(error.response?.data?.message || "Đã xảy ra lỗi", "error");
        }

        return Promise.reject(error);
    }
);

export default apiClient;
