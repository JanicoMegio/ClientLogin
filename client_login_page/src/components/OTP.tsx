import * as React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { useLoading } from '../hooks/useLoading';

// todo 

interface OTPprops {
    onForgetPassword: () => void;
    onResetPassword: () => void;
}

export default function OTPCard({ onForgetPassword, onResetPassword }: OTPprops) {
    const [otp, setOtp] = React.useState(['', '', '', '', '']);
    const [countdown, setCountdown] = React.useState(10);
    const [isCountdownActive, setIsCountdownActive] = React.useState(true);
    const { loading, startLoading } = useLoading(1000);

    React.useEffect(() => {
        if (isCountdownActive && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }, 1000);

            return () => clearInterval(timer);
        } else if (countdown === 0) {
            setIsCountdownActive(false);
        }
    }, [isCountdownActive, countdown]);

    
    const handleChange = (index: number, event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;

      
        if (/^[0-9]*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`)?.focus();
            }
        }

        if (value === '' && index > 0) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            document.getElementById(`otp-input-${index - 1}`)?.focus();
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        startLoading();
        setTimeout(() => {
            onResetPassword();
        }, 1000);


    };

    const handleResendOtp = () => {
        setCountdown(30);
        setIsCountdownActive(true)
    };


    const timer = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
    const allFieldsFilled = otp.every((digit) => digit !== '');

    React.useEffect(() => {
        return () => {
            clearTimeout(timer.current);
        };
    }, []);

    return (
        <Box>
            <Typography variant="h5" gutterBottom>
                Enter Security Code
            </Typography>
            <Typography sx={{ mb: 5 }}>We've sent a code to your email </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={1} justifyContent="center">
                    {otp.map((digit, index) => (
                        <Grid item key={index}>
                            <input
                                id={`otp-input-${index}`}
                                type="text"
                                value={digit}
                                onChange={(e) => handleChange(index, e)}
                                maxLength={1}
                                placeholder="-"
                                style={{
                                    width: '35px',
                                    height: '40px',
                                    fontSize: '24px',
                                    textAlign: 'center',
                                    margin: '0 5px',
                                    border: '1px solid #00237D',
                                    borderRadius: '2px',
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                    {isCountdownActive ? (
                        <Typography>
                            Resend OTP in <Typography color='primary' component="span" sx={{ fontWeight: 'bold' }}>{countdown}</Typography> seconds
                        </Typography>
                    ) : (
                        <Button onClick={handleResendOtp} disabled={isCountdownActive}>
                            Resend OTP
                        </Button>
                    )}
                </Typography>
                <Box sx={{ textAlign: 'end', mt: 2, position: 'relative' }}>
                    <Button variant="outlined" onClick={onForgetPassword} sx={{ mx: 2 }}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary" disabled={loading || !allFieldsFilled}>
                        {loading ? 'Verifying OTP' : 'Verify OTP'}
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
                </Box>
            </form>
        </Box>
    );
}
