// theme.ts
import { createTheme } from '@mui/material/styles';
import BgPng from '../assets/images/bg-design 2.png'; // Ensure to import your background image

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, Arial, sans-serif', // Set Poppins as the default font
        fontSize: 16, // Base font size
        h1: {
            fontSize: '2rem',
            fontWeight: 600,
        },
        h2: {
            fontSize: '1.5rem',
            fontWeight: 500,
            color: '#00237D',
        },

        h4: {
            fontWeight: 700,
            color: '#00237D',
        },

        h5: {
            fontWeight: 700,
            color: '#00237D',
        },
    },
    palette: {
        primary: {
            main: '#00237D',
        },
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    backgroundImage: `url(${BgPng})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '300px',
                    width: '100vw',
                    backgroundColor: '#00237D',
                },
            },
        },
    },
});

export default theme;
