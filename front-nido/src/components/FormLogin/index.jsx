import useForm from '../../hooks/useFormLogin';
import validate from '../../assets/js/validation';
import './FormLogin.css';
export default function FormLogin({ submitForm }) {
    const objectValues = {
        email: "",
        password: ""
    }
    const { handleChange, values, handleSubmit, errors } = useForm(objectValues, submitForm, validate);
    return (
        <> <h2>Iniciar sesión</h2>
            <form onSubmit={handleSubmit} className="form">

                {errors.auth && <span className="form_error">{errors.auth}</span>}
                <br />
                <div className="form__body">
                    <label htmlFor="email" className="form__label">Correo electrónico</label>
                    <div>
                        <input id="email" name="email" type="email" onChange={handleChange} value={values.email} className="form__input" />
                        {errors.email && <span className="form_error">{errors.email}</span>}
                    </div>
                    <label htmlFor="password" className="form__label">Contraseña</label>
                    <div>
                        <input id="password" name="password" type="password" onChange={handleChange} value={values.password} className="form__input" />
                        {errors.password && <span className="form_error">{errors.password}</span>}
                    </div>
                </div>
                <button type="submit" className="button-1">Ingresar</button>
                <p className="form__text">¿Aún no tenes cuenta?<a href="/signin"> Registrate</a></p>
            </form>
        </>
    )
}
