import * as React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';

export default function OTPCard() {
    const [otp, setOtp] = React.useState(['', '', '', '', '']);
    const [countdown, setCountdown] = React.useState(30);
    const [isCountdownActive, setIsCountdownActive] = React.useState(false);

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

    const handleChange = (index, event) => {
        const value = event.target.value;

        if (/^[0-9]*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input
            if (value && index < otp.length - 1) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('OTP:', otp.join(''));
        // Here you can add logic to verify the OTP
    };

    const handleResendOtp = () => {
        setCountdown(30);
        setIsCountdownActive(true);
        // Here you can add logic to resend the OTP
    };

    return (
        <Box sx={{ p: 3, border: '1px solid #ccc', borderRadius: '8px', width: '350px', margin: 'auto' }}>
            <Typography variant="h5" gutterBottom>
                Enter OTP
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
                <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Verify OTP
                </Button>
            </form>
            <Typography variant="body2" sx={{ mt: 2 }}>
                {isCountdownActive ? (
                    <span>Resend OTP in {countdown} seconds</span>
                ) : (
                    <Button onClick={handleResendOtp} disabled={isCountdownActive}>
                        Resend OTP
                    </Button>
                )}
            </Typography>
        </Box>
    );
}
