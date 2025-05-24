import { UserResponse } from "../../api/auth-service";
import { UserProfile } from "../../api/auth-service";

export const mapUserResponseToProfile = (user: UserResponse): UserProfile => ({
    username: user.username ?? "",
    userId: user.userId ?? "",
    email: user.email ?? "",
    createdAt: user.createdAt ?? "",
    name: "",         // chưa có từ backend
    avatarUrl: "",    // chưa có từ backend
});