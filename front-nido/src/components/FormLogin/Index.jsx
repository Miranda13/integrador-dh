import useForm from '../hooks/useForm';
import validate from '../assets/js/validateLogin';
export default function FormLogin({ submitForm }) {
    const objectValues = {
        email: "",
        password: ""
    }
    const { handleChange, values, handleSubmit, errors } = useForm(objectValues, submitForm, validate);
    return (
        <>
            <form onSubmit={handleSubmit}>
                {errors.auth && <span>{errors.auth}</span>}
                <br />
                <label htmlFor="email">Correo electrónico</label>
                <input name="email" type="email" onChange={handleChange} value={values.email} />
                {errors.email && <span>{errors.email}</span>}
                <label htmlFor="password">Contraseña</label>
                <input name="password" type="password" onChange={handleChange} value={values.password} />
                {errors.password && <span>{errors.password}</span>}
                <button type="submit">Ingresar</button>
                <p>¿Aún no tenes cuenta?<a href="##">Registrate</a></p>
            </form>
        </>
    )
}