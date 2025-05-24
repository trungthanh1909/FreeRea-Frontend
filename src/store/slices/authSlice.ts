import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserResponse, UserProfile } from "../../api/auth-service";
import { mapUserResponseToProfile } from "../../utils/mappers";

interface AuthState {
    user: UserProfile | null;
    token: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
}

const savedToken = localStorage.getItem("token");
const savedRefreshToken = localStorage.getItem("refreshToken");
const savedUser = localStorage.getItem("user");

const initialState: AuthState = {
    user: savedUser ? (JSON.parse(savedUser) as UserProfile) : null,
    token: savedToken,
    refreshToken: savedRefreshToken,
    isAuthenticated: !!savedToken,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (
            state,
            action: PayloadAction<{
                user: UserResponse;
                token: string;
                refreshToken: string;
            }>
        ) => {
            const { user, token, refreshToken } = action.payload;
            const mappedUser = mapUserResponseToProfile(user);

            state.user = mappedUser;
            state.token = token;
            state.refreshToken = refreshToken;
            state.isAuthenticated = true;

            localStorage.setItem("token", token);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("user", JSON.stringify(mappedUser));
        },

        updateAccessToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            localStorage.setItem("token", action.payload);
        },

        logout: (state) => {
            state.user = null;
            state.token = null;
            state.refreshToken = null;
            state.isAuthenticated = false;

            localStorage.removeItem("token");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem("user");
        },
    },
});

export const { loginSuccess, logout, updateAccessToken } = authSlice.actions;
export default authSlice.reducer;
