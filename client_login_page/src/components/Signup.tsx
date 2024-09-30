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
            { label: '', type: 'date', value: '' },
            { label: 'Email', type: 'email', value: '' },
            { label: 'Mobile Number', type: 'text', value: '' }
        ]
    },
    {
        label: 'Confirm Email and Phone Number',
        description: `Please confirm your email or mobile number.`,
        type: 'buttons'
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
    confirmationMethod: 'email' | 'mobile' | '';
    [key: string]: string | boolean | undefined;
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
        termsAccepted: false,
        confirmationMethod: ''
    });

    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [showVerificationCodeField, setShowVerificationCodeField] = React.useState(false);

    const handleNext = () => {
        if (activeStep === 2 && showVerificationCodeField) {
            // If on confirmation step and the verification code is shown, move to the next step
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setShowVerificationCodeField(false); // Hide verification field for the next steps
        } else if (activeStep === 2) {
            // If on the confirmation step, but the code is not shown, show it
            setShowVerificationCodeField(true);
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
            termsAccepted: false,
            confirmationMethod: ''
        });
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked, type } = event.target;
        setFormValues((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleVerificationCodeSubmit = () => {
        if (formValues.verificationCode) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setShowVerificationCodeField(false);
        } else {
            console.log("Verification code is required.");
        }
    };


    const handleSubmit = () => {
        // Handle submission logic here, e.g., sending data to an API
        setShowSuccessModal(true); // Show success modal
        setTimeout(() => {
            setShowSuccessModal(false); // Close modal after 2 seconds
            // Redirect to login page (replace with your actual routing logic)
            window.location.href = '/login'; // Example redirect
        }, 1000);
    };


    return (
        <Box >
            <Typography variant='h4' sx={{ mb: 3 }}>Sign Up  <Button onClick={onToggle}  sx={{ float: 'right'}}>Back</Button> </Typography>
           
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            {step.type === 'buttons' && activeStep === 0 && (
                                <Box>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        sx={{ mx: 2, mb: 2 }}
                                        onClick={handleNext}
                                    >
                                        Yes
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleNext}
                                        sx={{ mx: 2, mb: 2 }}
                                    >
                                        No, I am a new customer.
                                    </Button>
                                </Box>
                            )}
                            {step.type === 'buttons' && activeStep === 2 && (
                                <Box>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={formValues.confirmationMethod === 'email'}
                                                onChange={() => setFormValues((prev) => ({
                                                    ...prev,
                                                    confirmationMethod: 'email'
                                                }))}
                                                name="confirmationMethodEmail"
                                            />
                                        }
                                        label="Email Address"
                                    />

                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={formValues.confirmationMethod === 'mobile'}
                                                onChange={() => setFormValues((prev) => ({
                                                    ...prev,
                                                    confirmationMethod: 'mobile'
                                                }))}
                                                name="confirmationMethodMobile"
                                            />
                                        }
                                        label="Mobile"
                                    />

                                    {/* Show the verification code input if confirmation method is selected */}
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

                                    <Box sx={{ mt: 2 }}>
                                        <Button
                                            variant="contained"
                                            onClick={showVerificationCodeField ? handleVerificationCodeSubmit : handleNext}
                                            disabled={!formValues.confirmationMethod} // Button is disabled until a selection is made
                                            sx={{ mr: 1 }}
                                        >
                                            {showVerificationCodeField ? 'Submit Verification Code' : 'Continue'}
                                        </Button>
                                        <Button
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </Box>
                                </Box>
                            )}

                            {step.type === 'form' && step.fields && (
                                <Box component="form">
                                    {step.fields.map((field, fieldIndex) => (
                                        <TextField
                                            key={fieldIndex}
                                            label={field.label}
                                            type={field.type}
                                            name={field.label.toLowerCase().replace(' ', '')}
                                            value={formValues[field.label.toLowerCase().replace(' ', '')] as string}
                                            onChange={handleInputChange}
                                            fullWidth
                                            sx={{ mb: 2 }}
                                        />
                                    ))}
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
                                        onClick={showVerificationCodeField ? handleVerificationCodeSubmit : handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                        disabled={activeStep === 2 && !showVerificationCodeField} // Disable if no verification code shown
                                    >
                                        Continue
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
                                                checked={formValues.termsAccepted}
                                                onChange={handleInputChange}
                                                name="termsAccepted"
                                            />
                                        }
                                        label={step.checkboxLabel}
                                    />
                                    <Box sx={{ mt: 2 }}>
                                        <Button
                                            variant="contained"
                                            onClick={() => {
                                                if (formValues.termsAccepted) {
                                                    // Handle successful submission
                                                    handleSubmit() // Show success modal or other submission logic
                                                } else {
                                                    alert('You must accept the terms and conditions to proceed.');
                                                }
                                            }}
                                            sx={{ mr: 1 }}
                                        >
                                            Submit
                                        </Button>
                                        <Button
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                    </Box>
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
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 3, maxWidth: 500, margin: 'auto', mt: '20%' }}>
                    <Typography variant="h6" component="h2">Signup Successful!</Typography>
                    <Typography sx={{ mt: 2 }}>You can now log in</Typography>
                </Box>
            </Modal>
        </Box>
    );
}
