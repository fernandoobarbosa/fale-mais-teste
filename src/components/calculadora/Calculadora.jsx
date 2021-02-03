import React, { Component, useEffect, useState } from "react";
import Form from "../calculadora/Form";
import { calculaPlano } from "../../services/calcula";
function Calculadora() {
  const [resultado, setResultado] = useState({
    comFaleMais: " ",
    semFaleMais: " ",
  });
  return <Form onSubmitForm={onSubmitForm} resultado={resultado} />;
  function onSubmitForm(dados) {
    calculaPlano(dados)
      .then((response) => {
        setResultado(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    //console.log(response);
    //setResultado(response);
  }
}
export default Calculadora;
