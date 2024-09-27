import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Modal from '@mui/material/Modal';

const steps = [
    {
        label: 'Do you have an existing application with us?',
        description: `Choose how you'd like to sign up.`,
        type: 'buttons'
    },
    {
        label: 'Personal Information',
        description: `Please fill in your name and email.`,
        type: 'form',
        fields: [
            { label: 'Last Name', type: 'text', value: '' },
            { label: 'First Name', type: 'text', value: '' },
            { label: 'Middle Name', type: 'text', value: '' },
            { label: 'Suffix', type: 'text', value: '' },
            { label: 'Date of Birth', type: 'date', value: '' },
            { label: 'Email', type: 'email', value: '' },
            { label: 'Mobile Number', type: 'text', value: '' }
        ]
    },
    {
        label: 'Confirm Email and Phone Number',
        description: `Set a password for your account.`,
        type: 'form',
        fields: [
            { label: 'Email Address', type: 'button', value: '' },
            { label: 'Mobile ', type: 'button', value: '' },
        ]
    },
    {
        label: 'Complete Address',
        description: `Please provide your complete address.`,
        type: 'form',
        fields: [
            { label: 'Address Line 1', type: 'text', value: '' },
            { label: 'Address Line 2', type: 'text', value: '' },
            { label: 'City', type: 'text', value: '' },
            { label: 'State', type: 'text', value: '' },
            { label: 'Postal Code', type: 'text', value: '' }
        ]
    },
    {
        label: 'Set Username and Password',
        description: `Set a username and password for your account.`,
        type: 'form',
        fields: [
            { label: 'Username', type: 'text', value: '' },
            { label: 'Password', type: 'password', value: '' },
            { label: 'Confirm Password', type: 'password', value: '' }
        ]
    },
    {
        label: 'Agree to Terms',
        description: `Please accept our terms and conditions.`,
        type: 'checkbox',
        checkboxLabel: 'I agree to the terms and conditions'
    }
];

interface SignupProps {
    onToggle: () => void;
}

type FormValuesType = {
    lastName: string;
    firstName: string;
    middleName: string;
    suffix: string;
    dateOfBirth: string;
    email: string;
    mobileNumber: string;
    password: string;
    confirmPassword: string;
    verificationCode: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    termsAccepted: boolean;
    [key: string]: string | boolean;
};

export default function Signup({ onToggle }: SignupProps) {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formValues, setFormValues] = React.useState<FormValuesType>({
        lastName: '',
        firstName: '',
        middleName: '',
        suffix: '',
        dateOfBirth: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: '',
        verificationCode: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        postalCode: '',
        termsAccepted: false
    });

    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [showVerificationCodeField, setShowVerificationCodeField] = React.useState(false);

    const handleNext = () => {
        if (activeStep === 2) {
            // Show the verification code field on the third step
            setShowVerificationCodeField(true);
        } else if (activeStep === steps.length - 1) {
            setShowSuccessModal(true);
            setTimeout(() => {
                setShowSuccessModal(false);
                onToggle();
            }, 3000);
        } else {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep === 2) {
            setShowVerificationCodeField(false);
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
        setShowVerificationCodeField(false);
        setFormValues({
            lastName: '',
            firstName: '',
            middleName: '',
            suffix: '',
            dateOfBirth: '',
            email: '',
            mobileNumber: '',
            password: '',
            confirmPassword: '',
            verificationCode: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            postalCode: '',
            termsAccepted: false
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = event.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    return (
        <Box sx={{ maxWidth: 400 }}>
            <Typography variant='h4' sx={{ mb: 3 }}>Sign Up</Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            {step.type === 'buttons' && (
                                <Box>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ mx: 2 }}
                                        onClick={handleNext}
                                    >
                                        Yes
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                    >
                                        No, I am a new customer.
                                    </Button>
                                </Box>
                            )}
                            {step.type === 'form' && step.fields && (
                                <Box component="form">
                                    {step.fields.map((field, fieldIndex) => {
                                        if (field.type === 'button') {
                                            return (
                                                <Button
                                                    key={fieldIndex}
                                                    variant="outlined"
                                                    sx={{ mb: 2, mr: 1 }}
                                                    onClick={() => handleInputChange({ target: { name: field.label.toLowerCase().replace(' ', ''), value: 'Clicked' } } as any)} // Simulate button click
                                                >
                                                    {field.label}
                                                </Button>
                                            );
                                        } else {
                                            return (
                                                <TextField
                                                    key={fieldIndex}
                                                    label={field.label}
                                                    type={field.type}
                                                    name={field.label.toLowerCase().replace(' ', '')} // Convert label to lowercase and remove spaces for name
                                                    value={formValues[field.label.toLowerCase().replace(' ', '')] as string} // Type assertion
                                                    onChange={handleInputChange}
                                                    fullWidth
                                                    sx={{ mb: 2 }}
                                                />
                                            );
                                        }
                                    })}
                                    {showVerificationCodeField && (
                                        <TextField
                                            label="Verification Code"
                                            type="text"
                                            name="verificationCode"
                                            value={formValues.verificationCode}
                                            onChange={handleInputChange}
                                            fullWidth
                                            sx={{ mb: 2 }}
                                        />
                                     
                                    )}
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </Box>
                            )}
                            {step.type === 'checkbox' && (
                                <Box>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="termsAccepted"
                                                checked={formValues.termsAccepted as boolean}
                                                onChange={handleInputChange}
                                            />
                                        }
                                        label={step.checkboxLabel}
                                    />
                                    <Button
                                        variant="contained"
                                        onClick={handleNext}
                                        disabled={!formValues.termsAccepted}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                    </Button>
                                    <Button
                                        disabled={index === 0}
                                        onClick={handleBack}
                                        sx={{ mt: 1, mr: 1 }}
                                    >
                                        Back
                                    </Button>
                                </Box>
                            )}
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper elevation={0} sx={{ p: 3 }}>
                    <Typography variant="h5">All steps completed</Typography>
                    <Button onClick={handleReset} sx={{ mt: 2 }}>Reset</Button>
                </Paper>
            )}
            <Modal open={showSuccessModal} onClose={() => setShowSuccessModal(false)}>
                <Box sx={{ p: 2, bgcolor: 'white', borderRadius: 1, maxWidth: 400, margin: 'auto', mt: '20%' }}>
                    <Typography variant="h6" component="h2">Signup Successful!</Typography>
                    <Typography sx={{ mt: 2 }}>You can now log in with your credentials.</Typography>
                </Box>
            </Modal>
        </Box>
    );
}
