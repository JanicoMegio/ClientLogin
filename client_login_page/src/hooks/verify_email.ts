import React from 'react'

export const useEmailValidation = (email: string) => {
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
        const atIndex = email.indexOf('@');
        const isValidEmail =  atIndex > 1 && email.includes('@gmail.com')  && email.length > atIndex + 2;
        setIsValid(isValidEmail);
    }, [email]);

    return isValid;
};