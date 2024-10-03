import * as React from 'react';
import { Typography, Box, TextField, Button, Modal, Backdrop, Fade } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from '../app/store';
import {HandleNewPassword, HandleConfirmPassword} from '../features/reducers/ForgetPasswordSlice';
import { useMatch } from '../hooks/isMatch';


interface ResetPasswordProps {
    onForgetPassword: () => void;
    onToggle: () => void;
}

export default function ResetPassword({ onForgetPassword, onToggle }: ResetPasswordProps) {
    const [showModal, setShowModal] = React.useState(false);
    const ForgetPassForm = useSelector((state: RootState) => state.ForgetPassForm)
    const { isMatch, error } = useMatch(ForgetPassForm.newPassword, ForgetPassForm.passwordConfirm, 'Passwords do not match');
    const dispatch = useDispatch();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if(!isMatch){
            return 
        }
        setShowModal(true);
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
                    value={ForgetPassForm.newPassword}
                    onChange={(e) => dispatch(HandleNewPassword(e.target.value))}
                    fullWidth
                    sx={{ mb: 2}}
                />
                <TextField
                    label="Confirm Password"
                    type="password"
                    value={ForgetPassForm.passwordConfirm}
                    onChange={(e) => dispatch(HandleConfirmPassword(e.target.value))}
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
                <Button type="submit" variant="contained" color="primary" disabled={!isMatch}>
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
