import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ForgetPassForm{
    email: string;
    newPassword: string;
    passwordConfirm: string;
}

const initialState: ForgetPassForm = {
    email: "",
    newPassword: "",
    passwordConfirm: "",

}

const ForgetPassFormSlice = createSlice({
    name: "ForgetPassForm",
    initialState,

    reducers: {
        HandleEmailSend: (state, action: PayloadAction<string>) => {
            state.email = action.payload; 
        },
        HandleNewPassword: (state, action: PayloadAction<string>) => {
            state.newPassword = action.payload;
        },
        HandleConfirmPassword: (state, action: PayloadAction<string>) => {
            state.passwordConfirm = action.payload;
        },
        reset: () => {
            return initialState
        }
    }
   
})

export const {HandleEmailSend, HandleNewPassword, HandleConfirmPassword, reset} = ForgetPassFormSlice.actions
export default ForgetPassFormSlice.reducer