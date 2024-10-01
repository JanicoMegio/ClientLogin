import * as React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

interface OTPprops {
    onForgetPassword: () => void;
    onResetPassword: () => void;
}

export default function OTPCard({ onForgetPassword, onResetPassword }: OTPprops) {
    const [otp, setOtp] = React.useState(['', '', '', '', '']);
    const [countdown, setCountdown] = React.useState(30); // Initial countdown to 30 seconds
    const [isCountdownActive, setIsCountdownActive] = React.useState(true); // Countdown starts immediately

    // Countdown logic
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
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('OTP:', otp.join(''));
        onResetPassword();
    };


    const handleResendOtp = () => {
        setCountdown(30);
        setIsCountdownActive(true); // Activate the countdown again
    };

    return (
        <Box>
            <Typography variant="h5" sx={{ mb: 5 }} gutterBottom>
                Enter Security Code
            </Typography>
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
                                    width: '40px',
                                    height: '40px',
                                    fontSize: '24px',
                                    textAlign: 'center',
                                    margin: '0 5px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                    
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
                    {isCountdownActive ? (
                      <Typography>
                      Resend OTP in <Typography color='primary' component="span" sx={{ fontWeight: 'bold'}}>{countdown}</Typography> seconds
                    </Typography>
                    ) : (
                        <Button onClick={handleResendOtp} disabled={isCountdownActive}>
                            Resend OTP
                        </Button>
                    )}
                </Typography>
                <Box sx={{ textAlign: 'end', mt: 2 }}>
                    <Button variant="outlined" onClick={onForgetPassword} sx={{ mx: 2 }}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" color="primary">
                        Verify OTP
                    </Button>
                </Box>
            </form>
        </Box>
    );
}
