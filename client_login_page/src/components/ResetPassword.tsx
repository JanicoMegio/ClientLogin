import * as React from 'react';
import { Typography, Box, TextField, Button, Modal, Backdrop, Fade } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface ResetPasswordProps {
    onForgetPassword: () => void;
    onToggle: () => void;
}

export default function ResetPassword({ onForgetPassword, onToggle }: ResetPasswordProps) {
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const [showModal, setShowModal] = React.useState(false);
    const [error, setError] = React.useState('');

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');
        setShowModal(true);
        console.log('Password:', password);
        console.log('Confirm Password:', confirmPassword);


        setTimeout(() => {
            handleCloseModal();
        }, 3000);

    };

    const handleCloseModal = () => {
        setShowModal(false);
        onToggle();
    };

    return (
        <Box sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
                Reset Password
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    fullWidth
                    sx={{ mb: 2}}
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    fullWidth
                    sx={{ mb: 2 }}
                />
                {error && (
                    <Typography variant="body2" color="error" sx={{ mb: 2 }}>
                        {error}
                    </Typography>
                )}
                <Button onClick={onForgetPassword} variant="outlined" sx={{ mr: 2 }}>
                    Cancel
                </Button>
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
            
            <Modal
                open={showModal}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={showModal}>
                    <Box sx={{
                        bgcolor: 'white',
                        borderRadius: 2,
                        boxShadow: 24,
                        p: 4,
                        width: 400,
                        margin: 'auto',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        color: '#00237D',
                    }}>
                        <CheckCircleIcon sx={{ fontSize: 100, color: '#00237D' }} />
                        <Typography variant="h6" gutterBottom>
                        Password has changed successfully!
                        </Typography>
                       

                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
}
