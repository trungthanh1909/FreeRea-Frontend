import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { UserProfileResponse } from "../../api/userProfile-service"; // 🔄 dùng model từ user-profile-service

interface UserState {
    profile: UserProfileResponse | null;
    favorites: number[];
}

const initialState: UserState = {
    profile: null,
    favorites: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        // ✅ Đặt toàn bộ profile sau khi login / fetch từ profile service
        setProfile: (state, action: PayloadAction<UserProfileResponse>) => {
            state.profile = action.payload;
        },
        clearProfile: (state) => {
            state.profile = null;
            state.favorites = [];
        },

        // ✅ Cập nhật tên trong Redux sau khi gọi update thành công
        updateProfileName: (state, action: PayloadAction<string>) => {
            if (state.profile) {
                state.profile.name = action.payload;
            }
        },

        // ✅ Cập nhật avatar sau khi gọi changeAvatar thành công
        updateAvatar: (state, action: PayloadAction<string>) => {
            if (state.profile) {
                state.profile.avatarUrl = action.payload;
            }
        },

        // 💾 Favorites nếu bạn vẫn cần
        setFavorites: (state, action: PayloadAction<number[]>) => {
            state.favorites = action.payload;
        },
        addFavorite: (state, action: PayloadAction<number>) => {
            if (!state.favorites.includes(action.payload)) {
                state.favorites.push(action.payload);
            }
        },
        removeFavorite: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter((id) => id !== action.payload);
        },
    },
});

export const {
    setProfile,
    clearProfile,
    updateAvatar,
    updateProfileName,
    setFavorites,
    addFavorite,
    removeFavorite,
} = userSlice.actions;

export default userSlice.reducer;
