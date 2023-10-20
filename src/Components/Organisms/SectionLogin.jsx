import Input from "../Molecule/Input";
import React, { useState } from "react";

function SeccionLogin() {
  const [UserName, setUserName] = useState('');
  const [UserGmail, setUserGmail] = useState('');

  const handlerChangeUserName = (e) => {
    setUserName(e.target.value);
    console.log(e.target.value);
  }

 const handlerChangeGmail = (e) =>{
    setUserGmail(e.target.value);
    console.log (e.target.value);
  }

  const ValidarGmail = (e) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (emailRegex.test(UserGmail)) {
      console.log("Correo Valido");
    } else {
      console.log("Esto no es un correo valido ");
    }
  }
    

  return (
    <>
      <Input name="usernmae" title="Username" type="text" onChange={handlerChangeUserName}></Input>
      <Input name="Gmail" title="Gmail" type="text" onChange={handlerChangeGmail} onBlur={ValidarGmail}></Input>
      <button onClick={() => { alert("Usuario: "+UserName + "\nCorreo: "+ UserGmail ) }}>Iniciar Sesion</button>
    </>
  );
}

export default SeccionLogin;
