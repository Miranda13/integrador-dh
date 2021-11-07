import { useState, useEffect } from 'react';
import useLocalStorage from "./useLocalStorage";
export default function useFormLogin(objectValues, callback, validate) {
    const [user, setUser] = useLocalStorage('user', null);
    const [values, setValues] = useState({ ...objectValues })
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const userDemo = {
        email: "digital@booking.com",
        password: "digital123"
    }

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
            if(values.email !== userDemo.email || values.password !== userDemo.password){
                setErrors({auth: "El correo electrónico o la contraseña es incorrecta"});
            } else {
                callback();
                setUser(values);
                window.location.assign("/");
            }        
        }
    })
    
    return { handleChange, values, handleSubmit, errors }
}