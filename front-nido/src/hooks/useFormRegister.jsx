import { useState, useEffect } from 'react';
import useLocalStorage from "./useLocalStorage";
export default function useForm(objectValues, callback, validate) {
    const [user, setUser] = useLocalStorage('user', null);
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
        window.location.assign("/");
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            setUser(values);
        }
    })
    return { handleChange, values, handleSubmit, errors }
}