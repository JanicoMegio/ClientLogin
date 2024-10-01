import * as React from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

export default function SetUserPass(){
    const [errors, setErrors] = React.useState({});
    const [isUsernameAvailable, setIsUsernameAvailable] = React.useState(true); // Username availability state

    // Function to validate form fields
    const validateFields = () => {
        let tempErrors = {};
        const username = formValues['username'];
        const password = formValues['password'];

        // Username validation (example: check if it's available)
        if (username && username.length < 3) {
            tempErrors['username'] = "Username must be at least 3 characters long.";
        } else if (!isUsernameAvailable) {
            tempErrors['username'] = "Username is not available.";
        }

        // Password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, 1 uppercase, 1 number
        if (!passwordRegex.test(password)) {
            tempErrors['password'] = "Password must be 8 characters, include an uppercase letter and a number.";
        }

        setErrors(tempErrors);

        // Return true if there are no errors
        return Object.keys(tempErrors).length === 0;
    };

    // Example function to check username availability (simulated)
    const checkUsernameAvailability = (username) => {
        // Simulate an API call for checking username availability
        // In a real-world scenario, replace with API request
        if (username === 'testuser') {
            setIsUsernameAvailable(false); // Username 'testuser' is taken
        } else {
            setIsUsernameAvailable(true); // Available
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateFields()) {
            // Submit form if validation passes
            showVerificationCodeField ? handleVerificationCodeSubmit() : handleNext();
        }
    };

    // Track input changes to trigger validation
    const handleInputChangeWithValidation = (e) => {
        const { name, value } = e.target;
        handleInputChange(e);

        // Run specific validations on username and password
        if (name === 'username') {
            checkUsernameAvailability(value);
        }
    };

    return (
        step.type === 'setupform' && step.fields && (
            <Box component="form" onSubmit={handleSubmit}>
                {step.fields.map((field, fieldIndex) => (
                    <React.Fragment key={fieldIndex}>
                        <TextField
                            label={field.label}
                            type={field.type}
                            name={field.label.toLowerCase().replace(' ', '')}
                            value={formValues[field.label.toLowerCase().replace(' ', '')] as string}
                            onChange={handleInputChangeWithValidation}
                            fullWidth
                            sx={{ mb: 2 }}
                            error={!!errors[field.label.toLowerCase().replace(' ', '')]}
                            helperText={errors[field.label.toLowerCase().replace(' ', '')]}
                        />
                    </React.Fragment>
                ))}

                <Button
                    variant="contained"
                    type="submit"
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
        )
    );
}
