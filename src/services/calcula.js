//Checa origem e destino para calcular o valor da conta
export const calculaPlano = async (dados) => {
  //De 011 para 016
  if (dados.origem === "011" && dados.destino === "016") {
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
      tempoPlano: tempoPlano,
      comFaleMais: dados.tempo,
      semFaleMais: 100,
    };

    return object;
  }

  //De 016 para 011
  if (dados.origem === "016" && dados.destino === "011") {
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
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };

    return object;
  }
  //De 011 para 017
  if (dados.origem === "011" && dados.destino === "017") {
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
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };

    return object;
  }
  //De 017 para 011
  if (dados.origem === "017" && dados.destino === "011") {
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
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };

    return object;
  }
  //De 011 para 018
  if (dados.origem === "011" && dados.destino === "018") {
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
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };

    return object;
  }
  //De 018 para 011
  if (dados.origem === "018" && dados.destino === "011") {
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
      tempoPlano: tempoPlano,
      comFaleMais: 12,
      semFaleMais: 100,
    };

    return object;
  }

  return {
    comFaleMais: "-",
    semFaleMais: "-",
  };
};
