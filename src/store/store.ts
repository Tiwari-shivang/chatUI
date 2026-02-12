import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export type appState = ReturnType<typeof store.getState>;
export type appAction = typeof store.dispatch;