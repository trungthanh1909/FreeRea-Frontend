import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavouriteState {
    bookIds: string[];
}

const initialState: FavouriteState = {
    bookIds: [],
};

const favouriteSlice = createSlice({
    name: "favourite",
    initialState,
    reducers: {
        // Gán toàn bộ danh sách sách đã yêu thích
        setFavouriteBookIds: (state, action: PayloadAction<string[]>) => {
            state.bookIds = action.payload;
        },

        // Thêm 1 bookId nếu chưa tồn tại
        addFavourite: (state, action: PayloadAction<string>) => {
            if (!state.bookIds.includes(action.payload)) {
                state.bookIds.push(action.payload);
            }
        },

        // Xoá 1 bookId khỏi danh sách
        removeFavourite: (state, action: PayloadAction<string>) => {
            state.bookIds = state.bookIds.filter((id) => id !== action.payload);
        },

        // Xoá toàn bộ danh sách
        clearFavourite: (state) => {
            state.bookIds = [];
        },
    },
});

export const {
    setFavouriteBookIds,
    addFavourite,
    removeFavourite,
    clearFavourite,
} = favouriteSlice.actions;

export default favouriteSlice.reducer;