import React, { useState } from 'react'
import Form from '../calculadora/Form'
import { checaPreco } from '../../services/checaPreco'
import { checaPlano } from '../../services/checaPlano'
import { calculaPlano } from '../../services/calcula'
function Calculadora () {
  const [resultado, setResultado] = useState({
    comFaleMais: 0,
    semFaleMais: 0
  })
  const [erros, setErros] = useState({
    valida: false,
    texto: ''
  })
  function onSubmitForm (dados) {
    const preco = checaPreco(dados.origem, dados.destino)
    const tempoPlano = checaPlano(dados.plano)
    const planoCalculado = calculaPlano(dados.tempo, preco, tempoPlano)
    if (preco === 0) { setErros({ valida: true, texto: 'Não existe cobertura para essa região' }) }

    setResultado(planoCalculado)
    console.log(resultado)
  }

  function resetError () {
    setErros({ valida: false, texto: ' ' })
  }

  return <Form onSubmitForm={onSubmitForm} resultado={resultado} erros={erros} resetError={resetError} />
}
export default Calculadora
