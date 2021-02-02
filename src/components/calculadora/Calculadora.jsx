import React, { Component, useEffect, useState } from "react";
import Form from "../calculadora/Form";
import { createUser } from "../../services/calcula";
function Calculadora() {
  const [resultado, setResultado] = useState({});
  return <Form onSubmitForm={onSubmitForm} resultado={resultado} />;
  function onSubmitForm(dados) {
    console.log(dados.tempo);
    const tempo = dados.tempo;
    let resultados = {
      comFaleMais: tempo * 1.21,
      semFaleMais: tempo * 1.21,
    };
    setResultado(resultados);
  }
}
export default Calculadora;
