export default function validateLogin(values){
    const userDemo = {
        email: "digital@booking.com",
        password: "digital123"
    }
    let errors={}

    if(!values.email){
        errors.email="Este campo es obligatorio";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Correo electrónico invalido";
    }

    if(!values.password){
        errors.password="Este campo es obligatorio";
    }else if(values.password.length< 6){
        errors.password="Minimo 6 caracteres"
    }
    if(values.email !== userDemo.email || values.password !== userDemo.password){
        errors.auth = "El correo electronico o la contraseña es incorrecta";
    }
    return errors;
}