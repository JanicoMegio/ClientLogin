import { configureStore } from "@reduxjs/toolkit";
import LoginFormSlice from "../features/reducers/LoginFormSlice";
import ForgetPasswordSlice from "../features/reducers/ForgetPasswordSlice";

const store = configureStore({
    reducer: {
        loginForm: LoginFormSlice,
        ForgetPassForm: ForgetPasswordSlice,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;