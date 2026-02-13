import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { authSlice } from "./authSlice";
import { helperSlice } from "./helperSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        auth: authSlice.reducer,
        helper: helperSlice.reducer
    }
});

export type appState = ReturnType<typeof store.getState>;
export type appAction = typeof store.dispatch;