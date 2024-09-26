import * as React from 'react';
import { Box, Typography, TextField, Button, Link } from '@mui/material';

export default function ForgetPasswordCard() {
    const [email, setEmail] = React.useState('');
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
    };

    return (
        <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: '8px', width: '300px', margin: 'auto' }}>
            <Typography variant="h5" gutterBottom>
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
                <Link href="#">Back to Login</Link>
            </Typography>
        </Box>
    );
}
