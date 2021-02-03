import React, { useState } from "react";
import {
  TextField,
  Button,
  Switch,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Grid,
  Tab,
  Input,
  InputLabel,
} from "@material-ui/core";

function Form({ onSubmitForm, resultado }) {
  const [origem, setOrigem] = useState("011");
  const [destino, setDestino] = useState("011");
  const [tempo, setTempo] = useState("");
  const [plano, setPlano] = useState("FaleMais 30");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        let dados = {
          origem: origem,
          destino: destino,
          plano: plano,
          tempo: tempo,
        };
        onSubmitForm(dados);
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Origem</FormLabel>
            <RadioGroup
              aria-label="origem"
              name="origem"
              value={origem}
              onChange={(event) => {
                setOrigem(event.target.value);
              }}
            >
              <FormControlLabel value="011" control={<Radio />} label="011" />
              <FormControlLabel value="016" control={<Radio />} label="016" />
              <FormControlLabel value="017" control={<Radio />} label="017" />
              <FormControlLabel value="018" control={<Radio />} label="018" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Destino</FormLabel>
            <RadioGroup
              aria-label="destino"
              name="destino"
              value={destino}
              onChange={(event) => {
                setDestino(event.target.value);
              }}
            >
              <FormControlLabel value="011" control={<Radio />} label="011" />
              <FormControlLabel value="016" control={<Radio />} label="016" />
              <FormControlLabel value="017" control={<Radio />} label="017" />
              <FormControlLabel value="018" control={<Radio />} label="018" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Plano</FormLabel>
            <RadioGroup
              aria-label="plano"
              name="plano"
              value={plano}
              onChange={(event) => {
                setPlano(event.target.value);
              }}
            >
              <FormControlLabel
                value="FaleMais 30"
                control={<Radio />}
                label="FaleMais 30"
              />
              <FormControlLabel
                value="FaleMais 60"
                control={<Radio />}
                label="FaleMais 60"
              />
              <FormControlLabel
                value="FaleMais 120"
                control={<Radio />}
                label="FaleMais 120"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            value={tempo}
            onChange={(event) => {
              setTempo(event.target.value);
            }}
            id="tempo"
            label="Tempo em minutos"
            variant="outlined"
            margin="normal"
            type="number"
            required
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={resultado.comFaleMais}
            onChange={(event) => {
              setTempo(event.target.value);
            }}
            id="tempo"
            variant="outlined"
            margin="normal"
            color="secondary"
            disabled
          />
          <InputLabel>Com Fale Mais</InputLabel>
        </Grid>
        <Grid item xs={4}>
          <TextField
            value={resultado.semFaleMais}
            onChange={(event) => {
              setTempo(event.target.value);
            }}
            id="tempo"
            variant="outlined"
            margin="normal"
            color="secondary"
            disabled
          />
          <InputLabel>Sem Fale Mais</InputLabel>
        </Grid>
      </Grid>
      <Button type="submit" variant="contained" color="primary">
        Calcular
      </Button>
    </form>
  );
}

export default Form;
