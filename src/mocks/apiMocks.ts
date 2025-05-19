import { getBookList } from "./bookMocks";
import { loginUser as mockLoginUser } from "./userMocks";
import { Book } from "../types/book";
import { User } from "../types/user";

// ✅ Cấu hình để chuyển đổi giữa Mock API và API thật
const USE_MOCK_API = true; // Đổi thành `false` để gọi API thật

// ✅ API lấy danh sách sách
export const fetchBookList = async (): Promise<Book[]> => {
    if (USE_MOCK_API) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(getBookList()), 500);
        });
    } else {
        const response = await fetch("/api/books"); // Gọi API thật từ backend
        if (!response.ok) throw new Error("Failed to fetch books");
        return response.json();
    }
};

// ✅ API đăng nhập
export const loginUser = async (email: string, password: string): Promise<User> => {
    if (USE_MOCK_API) {
        return mockLoginUser(email, password);
    } else {
        const response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        if (!response.ok) throw new Error("Login failed");
        return response.json();
    }
};
