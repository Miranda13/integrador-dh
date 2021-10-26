import FormRegister from './FormRegister/Index';
import Login from './FormLogin/Index';
import { useState } from 'react';
function FirstComponent() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <p> Nido works !</p>
      {/* Aca deberia usarse las rutas para mostrar un formulario u otro
      {!isSubmitted ?
        <FormRegister submitForm={submitForm} />
        :
        <>
           Consecuencias al haber registrado correctamente todos los datos
          {console.log("Se registro correctamente")}
        </>
      } */}
      {!isSubmitted ?
        <Login submitForm={submitForm} />
        :
        <>
          {/* Consecuencias al haber registrado correctamente todos los datos */}
          {console.log("Se logeo correctamente")}
        </>
      }
    </>
  );
}

export default FirstComponent;