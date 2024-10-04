import Box from '@mui/material/Box';
import ErrorIcon from '../assets/images/error2.png'
import ErrorBackground from '../assets/images/error_page_1.png'

export default function Page404() {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                backgroundImage: `url(${ErrorBackground})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#ffffff',

            }}
        >
            <Box
                component="img"
                src={ErrorIcon}
                alt=""
                sx={{
                    width: '600px',
                    height: '600px',
                    maxWidth: '100%',  
                    maxHeight: '100%',  
                    objectFit: 'contain', 
                }}
            />
        </Box>
    );
}