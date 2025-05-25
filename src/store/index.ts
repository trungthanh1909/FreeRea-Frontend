import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import favouriteReducer from "./slices/favouriteSlice";
import userReducer from "./slices/userSlice";
import uiReducer from "./slices/uiSlice";
import paginationReducer from "./slices/paginationSlice";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        favourite: favouriteReducer,
        user: userReducer,
        ui: uiReducer,
        pagination: paginationReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
