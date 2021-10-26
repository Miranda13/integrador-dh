export default function validateRegister(values){
    let errors={}

    if(!values.email){
        errors.email="Este campo es obligatorio";
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Correo electrónico invalido";
    }

    if(!values.repeatEmail){
        errors.repeatEmail="Este campo es obligatorio";
    }else if(values.repeatEmail !== values.email){
        errors.repeatEmail="El correo electrónico no coincide con el original"
    }
    if(!values.password){
        errors.password="Este campo es obligatorio";
    }else if(values.password.length< 6){
        errors.password="Minimo 6 caracteres"
    }
    if(!values.repeatPassword){
        errors.repeatPassword="Este campo es obligatorio";
    }else if(values.password !== values.repeatPassword){
        errors.repeatPassword="La contraseña no coincide con la original"
    }
    return errors;
}