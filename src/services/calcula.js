// Calcula o plano com e sem FaleMais
export const calculaPlano = (tempo, preco, tempoPlano) => {
  let comFaleMais = (tempo - tempoPlano) * preco * 1.1
  const semFaleMais = (tempo * preco)

  if (comFaleMais < 0) {
    comFaleMais = 0
  }
  return {
    comFaleMais,
    semFaleMais
  }
}
