import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginCard from './LoginCard';
import SignUp from './Signup.tsx';
import Box from '@mui/material/Box';
import Content from './Content.tsx';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OTP from './OTP.tsx';
import ForgetPasswordCard from './ForgetPasswordCard.tsx';




export default function Main() {

    const [isSignIn, setIsSignIn] = React.useState(true);

    // Toggle function to switch views
    const toggleView = () => {
        setIsSignIn((prev) => !prev);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100vh'

                }}
            >
                <Grid container justifyContent="center" alignItems="center">
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                    >
                        <Box sx={{ marginBottom: { xs: 2, sm: 0 } }}>
                           
                            <Content />
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={6}
                        lg={6}
                    >
                         <Card sx={{ maxWidth: 500, padding: 2, boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                {isSignIn ? (
                                    <LoginCard onToggle={toggleView} />
                                ) : (
                                    <SignUp onToggle={toggleView} />
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
