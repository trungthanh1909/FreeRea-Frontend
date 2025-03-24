import React, { createContext, useContext, useState } from "react";
import { User } from "../types/user";
import { loginUser, registerUser } from "../mocks/userMocks";
type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<void>;
    register: (name: string, email: string, password: string) => Promise<void>;
    logout: () => void;
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = async (email: string, password: string) => {
        try {
            const loggedInUser = await loginUser(email, password);
            setUser(loggedInUser);
        } catch (error) {
            throw new Error("Sai thông tin đăng nhập");
        }
    };

    const register = async (name: string, email: string, password: string) => {
        try {
            const newUser = await registerUser(name, email, password);
            setUser(newUser);
        } catch (error) {
            throw new Error("Đăng ký thất bại");
        }
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth phải được sử dụng trong AuthProvider");
    return context;
};
