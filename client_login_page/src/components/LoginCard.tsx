import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

interface LoginCardProps {
    onToggle: () => void;
    onForgetPassword: () => void;
}

export default function LoginCard({ onToggle, onForgetPassword }: LoginCardProps) {
    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');
    const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Login:', login);
        console.log('Password:', password);
    };

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
                Login
            </Typography>
            <Typography>
                Don't have an account?{' '}
                <Link href="#" variant="body1" onClick={onToggle}>
                    Sign up
                </Link>
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email or Username"
                    variant="outlined"
                    value={login}
                    onChange={handleLoginChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={handlePasswordChange}
                    fullWidth
                    sx={{ marginBottom: 2 }}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <Link href="#" variant="body2" onClick={onForgetPassword}>
                        Forgot password?
                    </Link>
                </Box>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
                    Login
                </Button>
            </form>
        </Box>
    );
}
