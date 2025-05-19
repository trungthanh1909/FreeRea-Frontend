import apiClient from "../config/apiClient";
import { LoginForm, RefreshTokenRequest, LogoutRequest, IntrospectTokenRequest, AuthResponse, IntrospectTokenResponse,
    RoleForm, PermissionForm, UserCreateForm, UserUpdateForm, AuthUserProfile, Role, Permission,
} from "../types";

import { mapAuthenticateResponse, mapPermission, mapRole, mapUserProfile} from "../utils/mappers/auth.mapper";

export const authService = {
    // ===== AUTH =====
    login: async (data: LoginForm): Promise<AuthResponse> => {
        const res = await apiClient.post("/auth/token", data);
        return mapAuthenticateResponse(res.data.result);
    },

    refreshToken: async (data: RefreshTokenRequest): Promise<AuthResponse> => {
        const res = await apiClient.post("/auth/refresh", data);
        return mapAuthenticateResponse(res.data.result);
    },

    logout: async (data: LogoutRequest): Promise<void> => {
        await apiClient.post("/auth/logout", data);
    },

    introspectToken: async (
        data: IntrospectTokenRequest
    ): Promise<IntrospectTokenResponse> => {
        const res = await apiClient.post("/auth/introspect", data);
        return res.data.result;
    },

    // ===== USER =====
    getCurrentUserProfile: async (): Promise<AuthUserProfile> => {
        const res = await apiClient.get("/users/info");
        return mapUserProfile(res.data.result);
    },

    register: async (data: UserCreateForm): Promise<AuthUserProfile> => {
        const res = await apiClient.post("/users/registration", data);
        return mapUserProfile(res.data.result);
    },

    updateUser: async (
        userId: string,
        data: UserUpdateForm
    ): Promise<AuthUserProfile> => {
        const res = await apiClient.put(`/users/${userId}`, data);
        return mapUserProfile(res.data.result);
    },

    // ===== ROLES =====
    getAllRoles: async (): Promise<Role[]> => {
        const res = await apiClient.get("/roles");
        return res.data.result.map(mapRole);
    },

    createRole: async (data: RoleForm): Promise<Role> => {
        const res = await apiClient.post("/roles", data);
        return mapRole(res.data.result);
    },

    deleteRole: async (roleName: string): Promise<void> => {
        await apiClient.delete(`/roles/${roleName}`);
    },

    // ===== PERMISSIONS =====
    getAllPermissions: async (): Promise<Permission[]> => {
        const res = await apiClient.get("/permissions");
        return res.data.result.map(mapPermission);
    },

    createPermission: async (data: PermissionForm): Promise<Permission> => {
        const res = await apiClient.post("/permissions", data);
        return mapPermission(res.data.result);
    },

    deletePermission: async (permissionName: string): Promise<void> => {
        await apiClient.delete(`/permissions/${permissionName}`);
    },
};
