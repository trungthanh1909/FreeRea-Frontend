// ===============================
// 📌 Request types
// ===============================

export interface ChangeAvatarRequest {
    id: string;
    newAvatarUrl: string;
}

export interface CreateUserProfileRequest {
    id: string;
    userId: string;
    name: string;
    avatarUrl: string;
}

export interface UpdateUserProfileRequest {
    id: string;
    newName: string;
}

export interface UserReadingHistoryForm {
    chapterId: string;
    bookId: string;
    lastReadAt: string; // ISO format
}

// ===============================
// 📌 Response types
// ===============================

export interface ChangeAvatarResponse {
    id: string;
    newAvatarUrl: string;
}

export interface CreateUserProfileResponse {
    id: string;
    userId: string;
    name: string;
    avatarUrl: string;
}

export interface UserProfile {
    id: string;
    name: string;
    avatarUrl: string;
}

export interface UpdateUserProfileResponse {
    id: string;
    newName: string;
}

export interface UserReadingHistory {
    chapterId: string;
    bookId: string;
    lastReadAt: string; // ISO format
}

export interface UserReadingHistoryResponse {
    recordId: string;
    userId: string;
    chapterId: string;
    bookId: string;
    lastReadAt: string; // ISO format
}
