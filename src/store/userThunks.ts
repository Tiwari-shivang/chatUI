import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../config/api";

export type userResponse = {
    "uid": string,
    "firstName": string,
    "lastName": string,
    "userName": string,
    "email": string,
    "role": string,
    "gender": string,
    "dob": string,
    "isActive": boolean,
    "isVerified": boolean
}

export const getUserDetails = createAsyncThunk<userResponse, string>("user/getUserDetails", async (request) => {
    const response = await api.get(`/profile/${request}`);
    return response.data;
})