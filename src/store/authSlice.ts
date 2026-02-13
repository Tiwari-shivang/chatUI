import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

type page0Type = {
    firstName: string,
    lastName: string,
    userName: string
}

type page1Type = {
    email: string,
    password: string,
    confirmPass: string,
    gender: string,
    dob: string
}

type signupState = {
    page0: page0Type,
    page1: page1Type
}

const initialState: signupState = {
    page0: {
        firstName: '',
        lastName: '',
        userName: ''
    },
    page1: {
        email: '',
        password: '',
        confirmPass: '',
        gender: '',
        dob: ''
    }
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers: {
        setPage0Vals: (state, values: PayloadAction<page0Type>) => {
            state.page0 = values.payload;
        },
        setPage1Vals: (state, values: PayloadAction<page1Type>) => {
            state.page1 = values.payload;
        }
    }
})

export const {setPage0Vals, setPage1Vals} = authSlice.actions;