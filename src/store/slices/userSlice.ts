//Quản lý thông tin người dùng và danh sách yêu thích
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

interface UserState {
    profile: User | null;
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
        setProfile: (state, action: PayloadAction<User>) => {
            state.profile = action.payload;
        },
        clearProfile: (state) => {
            state.profile = null;
            state.favorites = [];
        },
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
    setFavorites,
    addFavorite,
    removeFavorite,
} = userSlice.actions;
export default userSlice.reducer;
