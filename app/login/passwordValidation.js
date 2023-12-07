import { useState, useEffect } from 'react';

export const usePasswordValidation = ({ firstPassword = "", secondPassword = ""}) => {
    const [validLength, setValidLength] = useState(null);
    const [hasNumber, setHasNumber] = useState(null);
    const [upperCase, setUpperCase] = useState(null);
    const [lowerCase, setLowerCase] = useState(null);
    const [specialChar, setSpecialChar] = useState(null);
    const [match, setMatch] = useState(null);

    useEffect(() => {
        setValidLength(firstPassword.length >= 8);
        setHasNumber(/\d/.test(firstPassword));
        setUpperCase(/[A-Z]/.test(firstPassword));
        setLowerCase(/[a-z]/.test(firstPassword));
        setSpecialChar(/[ `!@#$%^&*()_+\-=\]{};':"\\|,.<>?~]/.test(firstPassword));
        setMatch(firstPassword && secondPassword ? firstPassword === secondPassword : null);
    }, [firstPassword, secondPassword]);

    return [validLength, hasNumber, upperCase, lowerCase, specialChar, match];
}

export const isValidPassword = (check) => {
    return check.every(x => x);
}