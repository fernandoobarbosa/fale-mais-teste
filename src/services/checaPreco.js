// Checa origem e destino para calcular o valor da conta
export const checaPreco = (origem, destino) => {
  // De 011 para 016
  if (origem === '011' && destino === '016') { return 1.9 }

  // De 016 para 011
  if (origem === '016' && destino === '011') { return 2.9 }

  // De 011 para 017
  if (origem === '011' && destino === '017') { return 1.7 }

  // De 017 para 011
  if (origem === '017' && destino === '011') { return 2.7 }

  // De 011 para 018
  if (origem === '011' && destino === '018') { return 0.9 }

  // De 018 para 011
  if (origem === '018' && destino === '011') { return 1.9 }
  // Nenhum dos casos acima

  return 0
}
