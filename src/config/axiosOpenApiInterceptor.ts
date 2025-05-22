import axios from "axios";
import { store } from "../store";
import { logout, updateAccessToken } from "../store/slices/authSlice";
import { showToast } from "../utils/toast";

export const attachOpenApiInterceptors = () => {
    axios.interceptors.response.use(
        (response) => response,
        async (error) => {
            const originalRequest = error.config;

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

                    originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
                    return axios(originalRequest);
                } catch (refreshError) {
                    showToast("Phiên đăng nhập hết hạn. Vui lòng đăng nhập lại.", "error");
                    store.dispatch(logout());
                    setTimeout(() => (window.location.href = "/login"), 1000);
                    return Promise.reject(refreshError);
                }
            }

            const status = error.response?.status;
            if (status === 403) showToast("Bạn không có quyền truy cập", "error");
            else if (status >= 500) showToast("Lỗi hệ thống. Vui lòng thử lại sau.", "error");
            else showToast(error.response?.data?.message || "Đã xảy ra lỗi", "error");

            return Promise.reject(error);
        }
    );
};
