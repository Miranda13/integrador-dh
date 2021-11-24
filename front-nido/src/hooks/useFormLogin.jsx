import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from "./useLocalStorage";
import SessionContextProvider from '../context/sessionContext.js';
export default function useFormLogin(objectValues, callback, validate, idProduct, message) {
    const history = useNavigate();
    const { user, setToken } = useContext(SessionContextProvider);
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
            fetch('http://localhost:8080/api/v1/user/login', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(values)
            })
                .then(res => res.json())
                .then(data => {
                    callback();
                    setToken(data.token);
                    if (message) {
                        history(`/product/${idProduct}/booking`)
                    } else {
                        history("/")
                    }
                })
                .catch(error => setErrors({ auth: error.message }))

            // if (values.email !== userDemo.email || values.password !== userDemo.password) {
            //     setErrors({ auth: "El correo electrónico o la contraseña es incorrecta" });
            // } else {
            //     callback();
            //     setUser(values);
            //     window.location.assign("/");
            // }
        }
    })

    return { handleChange, values, handleSubmit, errors }
}