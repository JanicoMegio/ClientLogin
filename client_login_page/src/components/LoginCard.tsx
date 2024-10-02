import * as React from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';


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

    const [loading, setLoading] = React.useState(false);
  
    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);


    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    const handleButtonClick = () => {
        if (!loading) {
            setLoading(true);
            timer.current = setTimeout(() => {
                setLoading(false);
            }, 2000);
        }
    };


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

                <Box sx={{ position: 'relative'}}>
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}
                    disabled={loading}
                    onClick={handleButtonClick}>
                    Login
                </Button>
                {loading && (
                    <CircularProgress
                        size={24}
                        sx={{
                            position: 'absolute',
                            top: '70%',
                            left: '50%',
                            marginTop: '-15px',
                            marginLeft: '-12px',
                        }}
                    />
                )}
                </Box>
              
            </form>
        </Box>
    );
}
