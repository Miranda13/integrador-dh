import { changeClass, emailExpr, passExpr} from "./validators";

export default function validateLogin(values){
    const userDemo = {
        email: "digital@booking.com",
        password: "digital123"
    }
    
    let errors={}

    if(!values.email){
        errors.email="Este campo es obligatorio";
    }else if(!emailExpr.test(values.email)){
        errors.email="Correo electrónico invalido";
    }

    if(!values.password) {
        errors.password="Este campo es obligatorio";
    } else if(values.password.length< 6){
        errors.password="Mínimo 6 caracteres"
    } else if(!passExpr.test(values.password)){
        errors.password = "Válido letras números puntos comas asteriscos"
    }

    if(values.email !== userDemo.email || values.password !== userDemo.password){
        errors.auth = "El correo electrónico o la contraseña es incorrecta";
    }

    changeClass(values,errors);

    return errors;
}