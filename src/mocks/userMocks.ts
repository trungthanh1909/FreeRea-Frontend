import { User } from "../types/user";

export let users: (User & { password: string })[] = [
    {
        id: 1,
        name: "Người Dùng 1",
        email: "user@example.com",
        password: "password",
        avatarUrl: "https://i.pravatar.cc/150?u=user@example.com"
    }
];

export const mockUsers: User[] = [
    { id: 1, name: "Người Dùng 1", email: "user@example.com" },
];
export const loginUser = async (email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(u => u.email === email && u.password === password);
            if (user) {
                const { password, ...userWithoutPassword } = user;
                resolve(userWithoutPassword);
            } else {
                reject(new Error("Sai thông tin đăng nhập"));
            }
        }, 500);
    });
};


export const registerUser = async (name: string, email: string, password: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const existingUser = users.find(u => u.email === email);
            if (existingUser) {
                reject(new Error("Email đã được sử dụng!"));
                return;
            }

            const newUser: User = {
                id: users.length + 1,
                name,
                email,
                avatarUrl: `https://i.pravatar.cc/150?u=${email}`
            };

            users.push({ ...newUser, password });
            resolve(newUser);
        }, 500);
    });
};

