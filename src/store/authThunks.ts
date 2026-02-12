import { createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../config/api'

export type loginRequest = {
    email: string,
    password: string
}

export type signupRequest = {
    firstName: string,
    lastName: string,
    userName: string,
    email: string,
    password: string,
    role: 'user' | 'admin',
    gender: 'male' | 'female' | 'others',
    dob: string
}

export type successResponse = {
    message: string
}

export const loginThunk = createAsyncThunk<successResponse, loginRequest>("/auth/loginUser", async (request) => {
    const loginResponse = await api.post("auth/login", request);
    return loginResponse.data;
})