import * as React from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';

interface ForgetPasswordCardProps {
    onToggle: () => void;
    onOtpView: () => void;
}

export default function ForgetPasswordCard({ onToggle, onOtpView }: ForgetPasswordCardProps) {
    const [email, setEmail] = React.useState('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Email:', email);
        onOtpView()
        
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
                    value={email}
                    onChange={handleEmailChange}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Send Reset Link
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
