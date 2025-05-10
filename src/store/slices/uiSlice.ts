// Quản lý dark mode, modal
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UIState {
    darkMode: boolean;
    modalOpen: boolean;
}

const initialState: UIState = {
    darkMode: false,
    modalOpen: false,
};

const uiSlice = createSlice({
    name: "ui",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;
        },
        setDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload;
        },
        openModal: (state) => {
            state.modalOpen = true;
        },
        closeModal: (state) => {
            state.modalOpen = false;
        },
    },
});

export const {
    toggleDarkMode,
    setDarkMode,
    openModal,
    closeModal,
} = uiSlice.actions;
export default uiSlice.reducer;
