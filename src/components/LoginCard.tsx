import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../app/store';
import { handleChangePassword, handleChangeUN, toggleShowPassword } from '../features/reducers/LoginFormSlice';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';


interface LoginCardProps {
    onToggle: () => void;
    onForgetPassword: () => void;
}

export default function LoginCard({ onToggle, onForgetPassword }: LoginCardProps) {

    const loginCardForm = useSelector((state: RootState) => state.loginForm)
    const dispatch = useDispatch();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    const [loading, setLoading] = React.useState(false);

    return (
        <Box>
            <Typography variant="h4" gutterBottom >
                Login
            </Typography>
            <Typography sx={{ mb: 3 }}>
                Don't have an account?{' '}
                <Link href="#" variant="body1" onClick={onToggle}>
                    Sign up
                </Link>
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email or Username"
                    variant="outlined"
                    value={loginCardForm.userName}
                    onChange={(e) => dispatch(handleChangeUN(e.target.value))}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircleIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    label="Password"
                    type={loginCardForm.showPassword ? 'text' : 'password'}
                    variant="outlined"
                    value={loginCardForm.password}
                    onChange={(e) => dispatch(handleChangePassword(e.target.value))}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={() => dispatch(toggleShowPassword())} // Dispatch the toggle action
                                    edge="end"
                                    aria-label="toggle password visibility"
                                >
                                    {loginCardForm.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Link href="#" variant="body2" onClick={onForgetPassword}>
                        Forgot password?
                    </Link>
                </Box>

                <Box sx={{ position: 'relative' }}>
                    <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}
                        disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                        {loading && (
                            <CircularProgress
                                size={24}
                                sx={{
                                    color: 'white',  // Color for better visibility
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    marginTop: '-12px',  // Center the spinner vertically
                                    marginLeft: '-12px',  // Center the spinner horizontally
                                }}
                            />
                        )}
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
