import { createSlice } from "@reduxjs/toolkit"
import { getUserDetails, type userResponse } from "./userThunks"

type userDetails = {
    data: userResponse | null,
    isLoading: boolean,
    isError: boolean
}

type userState = {
    userDetails: userDetails
}

const initialState: userState = {
    userDetails: {
        data: null,
        isError: false,
        isLoading: false
    }
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {
        clearUserDetails: (state) => {
            state.userDetails.data = null;
            state.userDetails.isError = false;
            state.userDetails.isLoading = false;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUserDetails.pending, (state) => {
            state.userDetails.data = null;
            state.userDetails.isError = false;
            state.userDetails.isLoading = true;
        }),
        builder.addCase(getUserDetails.rejected, (state) => {
            state.userDetails.data = null;
            state.userDetails.isError = true;
            state.userDetails.isLoading = false;
        }),
        builder.addCase(getUserDetails.fulfilled, (state, response) => {
            state.userDetails.data = response.payload;
            state.userDetails.isError = false;
            state.userDetails.isLoading = false;
        })
    }
})

export const {clearUserDetails} = userSlice.actions;