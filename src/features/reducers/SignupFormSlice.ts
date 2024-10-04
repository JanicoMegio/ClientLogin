import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import React from "react";

export interface SignupForm {
    lastName: "";
    firstName: string;
    middleName: string;
    suffix: string;
    dateOfBirth: string;
    email: string;
    mobileNumber: string;
    password: string;
    confirmPassword: string;
    verificationCode: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    termsAccepted: boolean;
    confirmationMethod: 'email' | 'mobile' | '';
    [key: string]: string | boolean | undefined;
}


const initialState: SignupForm = {
    lastName: "",
    firstName: "",
    middleName: "",
    suffix: "",
    dateOfBirth: "",
    email: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    verificationCode: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    termsAccepted: false,
    confirmationMethod: "",

}

const SignupFormSlice = createSlice({
    name: "SignupForm",
    initialState,
    reducers: {

        reset: () => {
            return initialState
        }
    }
})



export default SignupFormSlice.reducer