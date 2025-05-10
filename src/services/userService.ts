import apiClient from "../config/apiClient";
import { User } from "../types";
import { ApiResponse } from "../types";

export interface UpdateUserPayload {
    name?: string;
    email?: string;
    avatarUrl?: string;
    bio?: string;
    password?: string;
}

export const userService = {
    getCurrentUser: () => apiClient.get<ApiResponse<User>>("/users/me"),
    updateUser: (data: UpdateUserPayload) =>
        apiClient.put<ApiResponse<User>>("/users/me", data),
    getUserById: (id: number) => apiClient.get<ApiResponse<User>>(`/users/${id}`),
    getAllUsers: () => apiClient.get<ApiResponse<User[]>>("/users"),
};
