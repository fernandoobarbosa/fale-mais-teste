//Checa origem e destino para calcular o valor da conta
export const calculaPlano = async (dados) => {
  //De 011 para 016
  if (dados.origem === "011" && dados.destino === "016") {
    var preco = 1.9;
    if (dados.plano === "FaleMais 30") {
      var tempoPlano = 30;
    }
    if (dados.plano === "FaleMais 60") {
      var tempoPlano = 60;
    }
    if (dados.plano === "FaleMais 120") {
      var tempoPlano = 120;
    }
    let object = {
      tempo: dados.tempo,
      preco: preco,
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };
    return calcular(object);
  }

  //De 016 para 011
  if (dados.origem === "016" && dados.destino === "011") {
    var preco = 2.9;
    if (dados.plano === "FaleMais 30") {
      var tempoPlano = 30;
    }
    if (dados.plano === "FaleMais 60") {
      var tempoPlano = 60;
    }
    if (dados.plano === "FaleMais 120") {
      var tempoPlano = 120;
    }
    let object = {
      tempo: dados.tempo,
      preco: preco,
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };
    return calcular(object);
  }
  //De 011 para 017
  if (dados.origem === "011" && dados.destino === "017") {
    var preco = 1.7;
    if (dados.plano === "FaleMais 30") {
      var tempoPlano = 30;
    }
    if (dados.plano === "FaleMais 60") {
      var tempoPlano = 60;
    }
    if (dados.plano === "FaleMais 120") {
      var tempoPlano = 120;
    }
    let object = {
      tempo: dados.tempo,
      preco: preco,
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };
    return calcular(object);
  }
  //De 017 para 011
  if (dados.origem === "017" && dados.destino === "011") {
    var preco = 2.7;
    if (dados.plano === "FaleMais 30") {
      var tempoPlano = 30;
    }
    if (dados.plano === "FaleMais 60") {
      var tempoPlano = 60;
    }
    if (dados.plano === "FaleMais 120") {
      var tempoPlano = 120;
    }
    let object = {
      tempo: dados.tempo,
      preco: preco,
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };
    return calcular(object);
  }
  //De 011 para 018
  if (dados.origem === "011" && dados.destino === "018") {
    var preco = 0.9;
    if (dados.plano === "FaleMais 30") {
      var tempoPlano = 30;
    }
    if (dados.plano === "FaleMais 60") {
      var tempoPlano = 60;
    }
    if (dados.plano === "FaleMais 120") {
      var tempoPlano = 120;
    }
    let object = {
      tempo: dados.tempo,
      preco: preco,
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };
    return calcular(object);
  }
  //De 018 para 011
  if (dados.origem === "018" && dados.destino === "011") {
    var preco = 1.9;
    if (dados.plano === "FaleMais 30") {
      var tempoPlano = 30;
    }
    if (dados.plano === "FaleMais 60") {
      var tempoPlano = 60;
    }
    if (dados.plano === "FaleMais 120") {
      var tempoPlano = 120;
    }
    let object = {
      tempo: dados.tempo,
      preco: preco,
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };
    return calcular(object);
  }
  //Nenhum dos casos acima
  return {
    comFaleMais: "-",
    semFaleMais: "-",
  };
};

//Calcula o valor das contas baseado nos parametros recebidos
function calcular(dados) {
  var semFaleMais = dados.tempo * dados.preco;
  if (dados.tempo > dados.tempoPlano) {
    var difTempo = dados.tempo - dados.tempoPlano;
  }

  var comFaleMais = difTempo * dados.preco * 1.1;
  console.log(semFaleMais.toFixed(2));
  console.log(comFaleMais.toFixed(2));

  return {
    comFaleMais: comFaleMais,
    semFaleMais: semFaleMais,
  };
}
