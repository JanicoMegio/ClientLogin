// Main.js
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import LoginCard from './LoginCard';
import SignUp from './Signup';
import OTP from './OTP';
import ForgetPasswordCard from './ForgetPasswordCard';
import Content from './Content';
import ResetPassword from './ResetPassword';

export default function Main() {
    
    const [currentView, setCurrentView] = React.useState('signIn'); 
    const showSignIn = () => setCurrentView('signIn');
    const showSignUp = () => setCurrentView('signUp');
    const showForgetPassword = () => setCurrentView('forgetPassword');
    const showOtp = () => setCurrentView('otp');
    const showResetPassword = () => setCurrentView('resetPassword');

    return (
        <React.Fragment>
            <CssBaseline />
            <Container
                maxWidth="lg"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh',
                }}
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Box sx={{ marginBottom: { xs: 2, sm: 0 } }}>
                            <Content />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6}>
                        <Card sx={{ maxWidth: 500, padding: 2, boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                {currentView === 'signIn' && (
                                    <LoginCard onToggle={showSignUp} onForgetPassword={showForgetPassword} />
                                )}
                                {currentView === 'signUp' && (
                                    <SignUp onToggle={showSignIn} />
                                )}
                                {currentView === 'forgetPassword' && (
                                    <ForgetPasswordCard onToggle={showSignIn} onOtpView={showOtp} />
                                )}
                                {currentView === 'otp' && (
                                    <OTP onForgetPassword={showForgetPassword} onResetPassword={showResetPassword} />
                                )}
                                {currentView === 'resetPassword' && (
                                    <ResetPassword onForgetPassword={showForgetPassword} onToggle={showSignIn} />
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
