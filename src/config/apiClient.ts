import axios from "axios";
import { store } from "../store";
import { logout, updateAccessToken } from "../store/slices/authSlice";
import { showToast } from "../utils/toast";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

// Request Interceptor — Gắn accessToken từ Redux
apiClient.interceptors.request.use((config) => {
    const token = store.getState().auth.token;
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Response Interceptor — Chuẩn hóa và tự refresh token
apiClient.interceptors.response.use(
    (response) => {
        const data = response.data;
        const result = data?.result ?? data?.data;

        if (data.code !== 1000 || result === undefined) {
            showToast(data.message || "Lỗi không xác định", "error");
            return Promise.reject(new Error(data.message || "Unexpected API Error"));
        }

        return result; // Chỉ trả về phần result
    },

    async (error) => {
        const originalRequest = error.config;

        // Tự động refresh token nếu accessToken hết hạn
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = store.getState().auth.refreshToken;
                if (!refreshToken) throw new Error("Thiếu refresh token");

                const res = await axios.post(
                    `${import.meta.env.VITE_API_BASE_URL}/auth/refresh`,
                    { refreshToken },
                    { headers: { "Content-Type": "application/json" } }
                );

                const newAccessToken = res.data?.result?.accessToken;
                if (!newAccessToken) throw new Error("Không lấy được accessToken mới");

                store.dispatch(updateAccessToken(newAccessToken));
                localStorage.setItem("token", newAccessToken);

                // Gắn token mới và gửi lại request gốc
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                return apiClient(originalRequest);

            } catch (refreshError) {
                showToast("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.", "error");
                store.dispatch(logout());
                setTimeout(() => (window.location.href = "/login"), 1000);
                return Promise.reject(refreshError);
            }
        }

        // Xử lý lỗi còn lại
        if (error.response) {
            const status = error.response.status;
            if (status === 403) {
                showToast("Bạn không có quyền truy cập tài nguyên này.", "error");
            } else if (status >= 500) {
                showToast("Lỗi hệ thống. Vui lòng thử lại sau.", "error");
            } else {
                showToast(error.response.data?.message || "Đã xảy ra lỗi", "error");
            }
        } else if (error.request) {
            showToast("Không thể kết nối máy chủ. Kiểm tra mạng hoặc thử lại sau.", "error");
        } else {
            showToast("Lỗi không xác định xảy ra", "error");
        }

        return Promise.reject(error);
    }
);

export default apiClient;
