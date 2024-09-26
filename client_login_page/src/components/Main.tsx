import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LoginCard from './LoginCard';
import Box from '@mui/material/Box';
import Content from './Content.tsx';
import Grid from '@mui/material/Grid';


export default function FixedContainer() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '80vh'

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
                        <LoginCard />
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    );
}
