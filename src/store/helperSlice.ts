import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export type helperState = {
    loader: boolean
}

const initialState: helperState = {
    loader: false
}

export const helperSlice = createSlice({
    name: 'helperSlice',
    initialState: initialState,
    reducers: {
        setLoader: (state, value: PayloadAction<boolean>) => {
            state.loader = value.payload
        }
    }
})

export const {setLoader} = helperSlice.actions;