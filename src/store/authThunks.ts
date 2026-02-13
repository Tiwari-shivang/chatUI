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
    gender: string,
    dob: string
}

export type successResponse = {
    message: string
}

export const loginThunk = createAsyncThunk<successResponse, loginRequest>("/auth/loginUser", async (request) => {
    const loginResponse = await api.post<successResponse>("auth/login", request);
    return loginResponse.data;
});

export const signupThunk = createAsyncThunk<successResponse, signupRequest>("auth/signupResponse", async (request) => {
    const response = await api.post<successResponse>("/auth/signup", request);
    return response.data;
})