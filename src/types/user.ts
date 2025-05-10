export interface User {
    id: number;
    name: string;
    email: string;
    password?: string;
    avatarUrl?: string;
    role?: "admin" | "user";
    bio?: string;
    favorites?: number[];
    createdAt?: string;
}
