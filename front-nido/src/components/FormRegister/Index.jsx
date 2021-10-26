import useForm from '../hooks/useForm';
import validate from '../assets/js/validateRegister';
export default function FormRegister({ submitForm }) {
    const objectValues = {
        email: "",
        repeatEmail: "",
        password: "",
        repeatPassword: ""
    }
    const { handleChange, values, handleSubmit, errors } = useForm(objectValues, submitForm, validate);
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre</label>
                <input id="name" name="name" type="text" />
                <label htmlFor="surname">Apellido</label>
                <input id="surname" name="surname" type="text" />
                <label htmlFor="email">Email</label>
                <input name="email" type="email" onChange={handleChange} value={values.email} />
                {errors.email && <span>{errors.email}</span>}
                <br />
                <label htmlFor="repeatEmail">Repetir email</label>
                <input name="repeatEmail" type="email" onChange={handleChange} value={values.repeatEmail} />
                {errors.repeatEmail && <span>{errors.repeatEmail}</span>}
                <br />
                <label htmlFor="password">Contraseña</label>
                <input name="password" type="password" onChange={handleChange} value={values.password} />
                {errors.password && <span>{errors.password}</span>}
                <br />
                <label htmlFor="repeatPassword">Repetir contraseña</label>
                <input name="repeatPassword" type="password" onChange={handleChange} value={values.repeatPassword} />
                {errors.repeatPassword && <span>{errors.repeatPassword}</span>}
                <br />
                <button type="submit">Crear cuenta</button>
                <p>¿Ya tienes una cuenta?<a href="##">Iniciar sesión</a></p>
            </form>
        </>
    )
}