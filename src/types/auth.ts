// ===============================
// 📌 Request types
// ===============================

export interface LoginForm {
    username: string;
    password: string;
}

export interface RefreshTokenRequest {
    refreshToken: string;
}

export interface LogoutRequest {
    refreshToken: string;
}

export interface IntrospectTokenRequest {
    token: string;
}

export interface PermissionForm {
    name: string;
    description: string;
}

export interface RoleForm {
    name: string;
    description: string;
    permissions: string[]; // danh sách tên quyền
}

export interface UserCreateForm {
    username: string;
    password: string;
    name: string;
    email: string;
    createdAt: string; // ISO format
}

export interface UserUpdateForm {
    username: string;
    password: string;
    roles: string[]; // danh sách tên role
}

export interface UserProfileCreationForm {
    userId: string;
    username: string;
    email: string;
    name: string;
}

// ===============================
// 📌 Response types
// ===============================

export interface AuthResponse {
    authenticated: boolean;
    accessToken: string;
    refreshToken: string;
    user: AuthUser;
}

export interface IntrospectTokenResponse {
    valid: boolean;
}

export interface Permission {
    name: string;
    description: string;
}

export interface Role {
    name: string;
    description: string;
    permissions: Permission[];
}

export interface AuthUserProfile {
    id: string;
    userId: string;
    username: string;
    email: string;
    name: string;
}

export interface AuthUser {
    userId: string;
    profileId: string;
    username: string;
    email: string;
    createdAt: string;
    roles?: string[];         // tên role
    permissions?: string[];   // tên quyền (flattened)
}