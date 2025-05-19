import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { toast } from "react-toastify";

import { RootState } from "../store";
import {
    loginSuccess,
    logout as logoutAction,
    updateAccessToken,
} from "../store/slices/authSlice";

import { authService } from "../services/authService";
import {
    LoginForm,
    RefreshTokenRequest,
    LogoutRequest,
} from "../types";

export const useAuth = () => {
    const dispatch = useDispatch();
    const { user, token, refreshToken, isAuthenticated } = useSelector(
        (state: RootState) => state.auth
    );

    // Login handler
    const login = useCallback(async (form: LoginForm) => {
        try {
            const response = await authService.login(form);
            dispatch(
                loginSuccess({
                    user: response.user,
                    token: response.accessToken,
                    refreshToken: response.refreshToken,
                })
            );
            toast.success("Đăng nhập thành công!");
        } catch (error: any) {
            toast.error("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin.");
            throw error;
        }
    }, [dispatch]);

    // Logout handler
    const logout = useCallback(async () => {
        try {
            if (refreshToken) {
                const payload: LogoutRequest = { refreshToken };
                await authService.logout(payload);
            }
        } catch (error) {
            console.warn("Lỗi khi gọi API logout, nhưng vẫn xóa local data");
        } finally {
            dispatch(logoutAction());
            toast.info("Đã đăng xuất.");
        }
    }, [dispatch, refreshToken]);

    // Refresh token
    const refreshAccessToken = useCallback(async () => {
        if (!refreshToken) return;
        try {
            const payload: RefreshTokenRequest = { refreshToken };
            const response = await authService.refreshToken(payload);
            dispatch(updateAccessToken(response.accessToken));
            toast.success("Làm mới token thành công!");
        } catch (error: any) {
            toast.error("Phiên đăng nhập đã hết hạn.");
            dispatch(logoutAction());
        }
    }, [dispatch, refreshToken]);

    // Get current user info (optional utility)
    const fetchCurrentUser = useCallback(async () => {
        try {
            const user = await authService.getCurrentUserProfile();
            return user;
        } catch (error) {
            toast.error("Không thể tải thông tin người dùng.");
            throw error;
        }
    }, []);

    return {
        user,
        token,
        refreshToken,
        isAuthenticated,
        login,
        logout,
        refreshAccessToken,
        fetchCurrentUser,
    };
};
