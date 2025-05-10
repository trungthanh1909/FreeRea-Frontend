import apiClient from "../config/apiClient";
import { Notification, ApiResponse } from "../types";

export const notificationService = {
    getNotifications: () =>
        apiClient.get<ApiResponse<Notification[]>>("/notifications"),

    markAsRead: (id: number) =>
        apiClient.post<ApiResponse<null>>(`/notifications/${id}/read`),

    markAllAsRead: () =>
        apiClient.post<ApiResponse<null>>("/notifications/read-all"),
};
