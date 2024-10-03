import * as React from 'react';
import { Box, Typography, TextField, Button, Link, CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../app/store';
import { HandleEmailSend } from '../features/reducers/ForgetPasswordSlice';
import { useEmailValidation } from '../hooks/verify_email'
import { useLoading } from '../hooks/useLoading'


interface ForgetPasswordCardProps {
    onToggle: () => void;
    onOtpView: () => void;
}

export default function ForgetPasswordCard({ onToggle, onOtpView}: ForgetPasswordCardProps) {

    const ForgetPassForm = useSelector((state: RootState) => state.ForgetPassForm)
    const dispatch = useDispatch();
    const isEmailValid = useEmailValidation(ForgetPassForm.email);
    const { loading, startLoading } = useLoading(1000); 

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!useEmailValidation) {
            alert("Please enter a valid email address.");
            return;
        }

        startLoading();
        setTimeout(() => {
            onOtpView();
        }, 1000);
    
    };

    return (
        <Box>
            <Typography variant="h4" sx={{ mb: 2 }} gutterBottom>
                Forget Password
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
                Enter your email address to receive a password reset link.
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email Address"
                    variant="outlined"
                    value={ForgetPassForm.email}
                    onChange={(e) => dispatch(HandleEmailSend(e.target.value))}
                    error={!isEmailValid && ForgetPassForm.email !== ''}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth   disabled={!isEmailValid || loading}>
                   {loading ? 'Sending OTP' : 'Send OTP'}
                    {loading && (
                        <CircularProgress
                            size={24}
                            sx={{
                                color: 'white',
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                marginTop: '-12px', 
                                marginLeft: '-12px',
                            }}
                        />
                    )}
                </Button>
            </form>
            <Typography variant="body2" sx={{ mt: 2 }}>
                <Link href="#" onClick={onToggle}>
                    Back to Login
                </Link>
            </Typography>
        </Box>
    );
}
