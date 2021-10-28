import useForm from '../hooks/useForm';
import validate from '../assets/js/validateLogin';
import './FormLogin.css';

export default function FormLogin({ submitForm }) {
    const objectValues = {
        email: "",
        password: ""
    }
    const { handleChange, values, handleSubmit, errors } = useForm(objectValues, submitForm, validate);
    return (
        <>
            <form onSubmit={handleSubmit} className="form-login">
                {errors.auth && <span>{errors.auth}</span>}
                <br />
                <div>
                    <label htmlFor="email">Correo electrónico</label>    
                </div>
                <div>          
                    <input name="email" type="email" onChange={handleChange} value={values.email} className="form-login__input"/> 
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                </div>
                <div>    
                    <input name="password" type="password" onChange={handleChange} value={values.password} className="form-login__input"/>
                {errors.password && <span>{errors.password}</span>}
                </div>
                <button type="submit" className="button-1">Ingresar</button>
                <p>¿Aún no tenes cuenta?<a href="##">Registrate</a></p>
            </form>
        </>
    )
}