import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../app/store';
import { handleChangePassword, handleChangeUN } from '../features/reducers/LoginFormSlice';

interface LoginCardProps {
    onToggle: () => void;
    onForgetPassword: () => void;
}

export default function LoginCard({ onToggle, onForgetPassword }: LoginCardProps) {

    const loginCardForm = useSelector((state: RootState) => state.loginForm)
    const dispatch = useDispatch();
    // const [login, setLogin] = React.useState('');
    // const [password, setPassword] = React.useState('');
    // const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setLogin(event.target.value);
    // };

    // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(event.target.value);
    // };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);
        console.log('Login:', loginCardForm.userName);
        console.log('Password:', loginCardForm.password);
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
                    onChange={(e)=>dispatch(handleChangeUN(e))}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={loginCardForm.password}
                    onChange={(e)=>dispatch(handleChangePassword(e))}
                    fullWidth
                    sx={{ marginBottom: 2 }}
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
