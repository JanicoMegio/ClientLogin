import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginForm {
    userName: string;
    password: string;
    showPassword: boolean; 
}

const initialState: LoginForm = {
    userName: "",
    password: "",
    showPassword: false, 
};

const loginFormSlice = createSlice({
    name: "loginForm",
    initialState,
    reducers: {
        handleChangeUN: (state, action: PayloadAction<string>) => {
            state.userName = action.payload; 
        },
        handleChangePassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload; 
        },
        toggleShowPassword: (state) => {
            state.showPassword = !state.showPassword; 
        },
        reset: () => {
            return initialState;
        },
    },
});

export const { handleChangeUN, handleChangePassword, toggleShowPassword, reset } = loginFormSlice.actions;
export default loginFormSlice.reducer;
