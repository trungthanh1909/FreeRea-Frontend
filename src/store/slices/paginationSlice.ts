import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PaginationState {
    readingHistory: { page: number; pageSize: number };
    comment: { page: number; pageSize: number };
    favorite: { page: number; pageSize: number };
}

const initialState: PaginationState = {
    readingHistory: { page: 0, pageSize: 6 },
    comment: { page: 0, pageSize: 10 },
    favorite: { page: 0, pageSize: 6 },
};

const paginationSlice = createSlice({
    name: "pagination",
    initialState,
    reducers: {
        setReadingHistoryPage(state, action: PayloadAction<number>) {
            state.readingHistory.page = action.payload;
        },
        setCommentPage(state, action: PayloadAction<number>) {
            state.comment.page = action.payload;
        },
        setFavoritePage(state, action: PayloadAction<number>) {
            state.favorite.page = action.payload;
        },
        setPageSize(
            state,
            action: PayloadAction<{ type: keyof PaginationState; size: number }>
        ) {
            const { type, size } = action.payload;
            state[type].pageSize = size;
        },
    },
});

export const {
    setReadingHistoryPage,
    setCommentPage,
    setFavoritePage,
    setPageSize,
} = paginationSlice.actions;

export default paginationSlice.reducer;
