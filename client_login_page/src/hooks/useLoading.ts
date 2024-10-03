import React from 'react';

export const useLoading = (delay: number = 1000) => {
    const [loading, setLoading] = React.useState(false);

    const startLoading = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, delay);
    };

    return { loading, startLoading };
};
