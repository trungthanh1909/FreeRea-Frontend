import apiClient from "../config/apiClient";
import { AuthResponse, LoginRequest,  RegisterRequest} from "../types";

export const login = (data: LoginRequest) => {
    return apiClient.post<AuthResponse>("/auth/login", data);
};

export const register = (data: RegisterRequest) => {
    return apiClient.post<AuthResponse>("/auth/register", data);
};

export const getCurrentUser = () => {
    return apiClient.get("/auth/me");
};

export const logout = () => {
    return apiClient.post("/auth/logout");
};

// Làm mới access token
export const refreshToken = () => {
    return apiClient.post("/auth/refresh");
};
// Có thể update forgotPassword,verifyEmail nếu a Kiên yêu cầu