import { useState, useEffect, useCallback } from 'react';

export default function useForm(objectValues, callback, validate) {
    const [values, setValues] = useState({ ...objectValues })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }
    })
    return { handleChange, values, handleSubmit, errors }
}