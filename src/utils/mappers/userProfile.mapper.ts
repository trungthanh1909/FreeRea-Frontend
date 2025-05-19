import {
    ChangeAvatarResponse,
    CreateUserProfileResponse,
    UserProfile,
    UpdateUserProfileResponse,
    UserReadingHistory,
    UserReadingHistoryResponse,
} from "../../types";

export const mapCreateUserProfileResponse = (
    res: CreateUserProfileResponse
): UserProfile => ({
    id: res.id,
    name: res.name,
    avatarUrl: res.avatarUrl,
});

export const mapChangeAvatarResponse = (
    res: ChangeAvatarResponse
): Pick<UserProfile, "id" | "avatarUrl"> => ({
    id: res.id,
    avatarUrl: res.newAvatarUrl,
});

export const mapUpdateUserProfileResponse = (
    res: UpdateUserProfileResponse
): Pick<UserProfile, "id" | "name"> => ({
    id: res.id,
    name: res.newName,
});

export const mapUserReadingHistoryResponse = (
    res: UserReadingHistoryResponse
): UserReadingHistory => ({
    chapterId: res.chapterId,
    bookId: res.bookId,
    lastReadAt: res.lastReadAt,
});
