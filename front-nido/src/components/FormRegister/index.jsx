import useForm from '../hooks/useFormRegister';
import validate from '../assets/js/validateRegister';
import "./FormRegister.css";

export default function FormRegister({ submitForm }) {
    const objectValues = {
        email: "",
        repeatEmail: "",
        password: "",
        repeatPassword: ""
    }
    const { handleChange, values, handleSubmit, errors } = useForm(objectValues, submitForm, validate);
    return (
        <> <h2>Crear cuenta</h2>
            <form onSubmit={handleSubmit} className="form">
                <div className="form__body">
                    <div className="form__body--two">
                        <div className="form__body--two-label">
                            <label htmlFor="name" className="form__label">Nombre</label>
                            <input id="name" name="name" type="text" className="form__input" />
                        </div>
                        <div className="form__body--two-label">
                            <label htmlFor="surname" className="form__label">Apellido</label>
                            <input id="surname" name="surname" type="text" className="form__input" />
                        </div>
                    </div>
                    <label htmlFor="email" className="form__label">Email</label>
                    <div>
                        <input name="email" type="email" onChange={handleChange} value={values.email} className="form__input" />
                    </div>
                    {errors.email && <span className="form_error">{errors.email}</span>}

                    <label htmlFor="repeatEmail" className="form__label">Repetir email</label>
                    <div>
                        <input name="repeatEmail" type="email" onChange={handleChange} value={values.repeatEmail} className="form__input" />
                        {errors.repeatEmail && <span className="form_error">{errors.repeatEmail}</span>}
                    </div>

                    <label htmlFor="password" className="form__label">Contraseña</label>
                    <div><input name="password" type="password" onChange={handleChange} value={values.password} className="form__input" />
                        {errors.password && <span className="form_error">{errors.password}</span>}
                    </div>


                    <label htmlFor="repeatPassword" className="form__label">Repetir contraseña</label>
                    <div>
                        <input name="repeatPassword" type="password" onChange={handleChange} value={values.repeatPassword} className="form__input" />
                        {errors.repeatPassword && <span className="form_error">{errors.repeatPassword}</span>}
                    </div>
                    <br />
                </div>
                <button type="submit" className="button-1">Crear cuenta</button>
                <p className="form__text">¿Ya tienes una cuenta?<a href="/login">Iniciar sesión</a></p>
            </form>
        </>
    )
}