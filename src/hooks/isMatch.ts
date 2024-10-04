import React from 'react';

export const useMatch = (firstValue: string, secondValue: string, errorMessage: string) => {
    const [isMatch, setIsMatch] = React.useState(true);
    const [error, setError] = React.useState<string | null>(null);

    React.useEffect(() => {
        if (!firstValue || !secondValue) {
            setIsMatch(false);
            setError("Fields cannot be empty");
            return;
        }

        if (firstValue !== secondValue) {
            setIsMatch(false);
            setError(errorMessage);
        } else {
            setIsMatch(true);
            setError(null);
        }
    }, [firstValue, secondValue, errorMessage]);

    return { isMatch, error };
};

