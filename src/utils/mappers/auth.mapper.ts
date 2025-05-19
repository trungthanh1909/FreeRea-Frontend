import {
    AuthResponse,
    AuthUser,
    Permission,
    Role,
    AuthUserProfile,
} from "../../types";

// BE trả về UserResponse kiểu như dưới (không import từ BE mà viết giả định lại ở đây)
type RawUserResponse = {
    userId: string;
    profileId: string;
    username: string;
    email: string;
    password?: string; // bỏ ở FE
    createdAt: string | Date;
    roles?: string[];
    permissions?: string[];
};

type RawAuthResponse = {
    authenticated: boolean;
    token: string;
    refreshToken: string;
    user: RawUserResponse;
};

type RawPermissionResponse = {
    name: string;
    description: string;
};

type RawRoleResponse = {
    name: string;
    description: string;
    permissions: RawPermissionResponse[];
};

type RawUserProfileResponse = {
    id: string;
    userId: string;
    username: string;
    email: string;
    name: string;
};

// Convert RawUserResponse → AuthUser
export function mapUserResponseToAuthUser(data: RawUserResponse): AuthUser {
    return {
        userId: data.userId,
        profileId: data.profileId,
        username: data.username,
        email: data.email,
        createdAt: new Date(data.createdAt).toISOString(),
        roles: data.roles ?? [],
        permissions: data.permissions ?? [],
    };
}

// Convert RawAuthResponse → AuthResponse
export function mapAuthenticateResponse(data: RawAuthResponse): AuthResponse {
    return {
        authenticated: data.authenticated,
        accessToken: data.token,
        refreshToken: data.refreshToken,
        user: mapUserResponseToAuthUser(data.user),
    };
}

// Convert RawUserProfileResponse → UserProfile
export function mapUserProfile(data: RawUserProfileResponse): AuthUserProfile {
    return {
        id: data.id,
        userId: data.userId,
        username: data.username,
        email: data.email,
        name: data.name,
    };
}

// Convert RawPermissionResponse → Permission
export function mapPermission(data: RawPermissionResponse): Permission {
    return {
        name: data.name,
        description: data.description,
    };
}

// Convert RawRoleResponse → Role
export function mapRole(data: RawRoleResponse): Role {
    return {
        name: data.name,
        description: data.description,
        permissions: data.permissions.map(mapPermission),
    };
}
