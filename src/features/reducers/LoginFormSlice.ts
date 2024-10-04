import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";


export interface LoginForm {
    userName: string;
    password: string;
}

const initialState: LoginForm = {
    userName: "",
    password: ""
}

const loginFormSlice = createSlice({
    name: "loginForm",
    initialState,
    reducers: {
        handleChangeUN: (state, action: PayloadAction<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>>) => {
            console.log(state.userName);
            state.userName = action.payload.target.value;
        },
        handleChangePassword: (state, action: PayloadAction<React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>>) => {
            console.log(state.password);
            state.password = action.payload.target.value;
        },
        reset: () => {
            return initialState
        }
    }
})

export const { handleChangeUN, handleChangePassword, reset } = loginFormSlice.actions;
export default loginFormSlice.reducer