import { changeClass, emailExpr, nameExpr, passExpr } from "./validators";

export default function validateRegister(values){
    let errors={}

    if(!values.name){
        errors.name ="Este campo es obligatorio";
    }else if(!nameExpr.test(values.name) ) {
        errors.name="Letras sin caracteres especiales";
    } 

    if(!values.surname){
        errors.surname="Este campo es obligatorio";
    }else if(!nameExpr.test(values.surname) ) {
        errors.surname="Letras sin caracteres especiales";
    }

    if(!values.email){
        errors.email="Este campo es obligatorio";
    } else if(!emailExpr.test(values.email)){
        errors.email="Correo electrónico inválido";
    }

    if(!values.repeatEmail){
        errors.repeatEmail="Este campo es obligatorio";
    }else if(values.repeatEmail !== values.email){
        errors.repeatEmail="El correo electrónico no coincide con el original"
    }

    if(!values.password){
        errors.password="Este campo es obligatorio";
    } else if(values.password.length< 6){
        errors.password="Mínimo 6 caracteres"
    } else if(!passExpr.test(values.password)){
        errors.password = "Válido letras números puntos comas asteriscos"
    }

    if(!values.repeatPassword){
        errors.repeatPassword="Este campo es obligatorio";
    }else if(values.password !== values.repeatPassword){
        errors.repeatPassword = "La contraseña no coincide con la original"
    }

    changeClass(values,errors);

    return errors;
}
