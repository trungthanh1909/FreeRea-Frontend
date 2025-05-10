import React, { createContext, useContext, useEffect, useState } from "react";
import { login, register, getCurrentUser, logout as apiLogout } from "../services/authService";
import { User, AuthResponse } from "../types";

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Kiểm tra token và lấy thông tin user khi app khởi động
    useEffect(() => {
        const initAuth = async () => {
            try {
                const res = await getCurrentUser();
                setUser(res.data); // Assumes res.data is the user object
            } catch (err) {
                setUser(null);
            }
        };
        initAuth();
    }, []);

    const handleLogin = async (email: string, password: string) => {
        try {
            const response = await login({ email, password });
            const { token, user } = response.data as AuthResponse;
            localStorage.setItem("token", token);
            setUser(user);
        } catch (error) {
            throw new Error("Sai thông tin đăng nhập");
        }
    };

    const handleRegister = async (name: string, email: string, password: string) => {
        try {
            const response = await register({ name, email, password });
            const { token, user } = response.data as AuthResponse;
            localStorage.setItem("token", token);
            setUser(user);
        } catch (error) {
            throw new Error("Đăng ký thất bại");
        }
    };

    const handleLogout = async () => {
        try {
            await apiLogout();
        } catch {}
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login: handleLogin, register: handleRegister, logout: handleLogout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth phải được sử dụng trong AuthProvider");
    return context;
};
