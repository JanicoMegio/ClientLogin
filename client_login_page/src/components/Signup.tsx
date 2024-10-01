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
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
        type: 'mixform',
        fields: [
            { label: 'Address Line 1', name: 'addressLine1', type: 'text', value: '' },
            { label: 'Address Line 2', name: 'addressLine2', type: 'text', value: '' },
            { label: 'City', name: 'city', type: 'text', value: '' },
            { label: 'State', name: 'state', type: 'select', options: ['New Yorkssdsdsdssdsssss', 'California', 'Texas'], value: '' },
            {label: 'Barangay', name: 'Brgy', type: 'select', options: ['Quiasdsao', 'Jalajala', 'Hulo'], value: ''},
            { label: 'Postal Code', name: 'postalCode', type: 'text', value: '' }
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


    const handleSelectChange = (event: SelectChangeEvent) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const [showSuccessModal, setShowSuccessModal] = React.useState(false);
    const [showVerificationCodeField, setShowVerificationCodeField] = React.useState(false);

    const handleNext = () => {
        if (activeStep === 2 && showVerificationCodeField) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
            setShowVerificationCodeField(false);
        } else if (activeStep === 2) {
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
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
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

        setShowSuccessModal(true);
        setTimeout(() => {
            setShowSuccessModal(false);
            window.location.href = '/login';
        }, 2000);
    };


    return (
        <Box >
            <Typography variant='h4' sx={{ mb: 3 }}>Sign Up  <Button onClick={onToggle} sx={{ float: 'right' }}>Back</Button> </Typography>
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
                                                disabled={showVerificationCodeField}
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
                                                disabled={showVerificationCodeField}
                                            />
                                        }
                                        label="Mobile"
                                    />

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
                                            disabled={!formValues.confirmationMethod}
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
                                    <Button
                                        variant="contained"
                                        onClick={showVerificationCodeField ? handleVerificationCodeSubmit : handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                        disabled={activeStep === 2 && !showVerificationCodeField}
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

                            {step.type === 'mixform' && step.fields && (
                                <Box component="form">
                                    {step.fields.map((field, fieldIndex) => (
                                        field.type === 'select' ? (
                                            <FormControl key={fieldIndex} sx={{ width: '100%', mb: 2 }}>
                                                <InputLabel>{field.label}</InputLabel>
                                                <Select
                                                    name={field.label.toLowerCase().replace(' ', '')}
                                                    value={formValues[field.label.toLowerCase().replace(' ', '')] as string}
                                                    onChange={handleSelectChange}  
                                                    autoWidth
                                                    label={field.label}
                                                >
                                                    <MenuItem value="">
                                                        <em>None</em>
                                                    </MenuItem>
                                                    {field.options?.map((option, optionIndex) => (
                                                        <MenuItem  key={optionIndex} value={option}>
                                                            {option}
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        ) : (
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
                                        )
                                    ))}

                                    <Button
                                        variant="contained"
                                        onClick={showVerificationCodeField ? handleVerificationCodeSubmit : handleNext}
                                        sx={{ mt: 1, mr: 1 }}
                                        disabled={activeStep === 2 && !showVerificationCodeField}
                                    >
                                        Continue
                                    </Button>
                                    <Button
                                        disabled={activeStep === 0}
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
                                                    handleSubmit()
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
                <Box sx={{ p: 3, bgcolor: 'white', borderRadius: 3, maxWidth: 500, margin: 'auto', mt: '20%', textAlign: 'center' }}>
                    <CheckCircleIcon sx={{ fontSize: 100, color: '#4caf50' }} />
                    <Typography variant="h4" component="h2" sx={{ color: '#4caf50' }}>Success</Typography>
                    <Typography sx={{ mt: 2 }}>You can now log in</Typography>

                </Box>
            </Modal>
        </Box>
    );
}
