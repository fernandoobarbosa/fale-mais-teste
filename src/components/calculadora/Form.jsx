import React, { useState } from 'react'
import {
  TextField,
  Button,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Grid
} from '@material-ui/core'
import CurrencyTextField from '@unicef/material-ui-currency-textfield'

function Form ({ onSubmitForm, resultado, erros, resetError }) {
  const [origem, setOrigem] = useState('011')
  const [destino, setDestino] = useState('011')
  const [tempo, setTempo] = useState('')
  const [plano, setPlano] = useState('FaleMais 30')
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        const dados = {
          origem: origem,
          destino: destino,
          plano: plano,
          tempo: tempo
        }
        onSubmitForm(dados)
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Origem</FormLabel>
            <RadioGroup
              aria-label='origem'
              name='origem'
              id='origem'
              value={origem}
              onChange={(event) => {
                setOrigem(event.target.value)
              }}
            >
              <FormControlLabel value='011' control={<Radio />} label='011' />
              <FormControlLabel value='016' control={<Radio />} label='016' />
              <FormControlLabel value='017' control={<Radio />} label='017' />
              <FormControlLabel value='018' control={<Radio />} label='018' />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Destino</FormLabel>
            <RadioGroup
              aria-label='destino'
              name='destino'
              id='destino'
              value={destino}
              onChange={(event) => {
                setDestino(event.target.value)
              }}
            >
              <FormControlLabel value='011' control={<Radio />} label='011' />
              <FormControlLabel value='016' control={<Radio />} label='016' />
              <FormControlLabel value='017' control={<Radio />} label='017' />
              <FormControlLabel value='018' control={<Radio />} label='018' />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl component='fieldset'>
            <FormLabel component='legend'>Plano</FormLabel>
            <RadioGroup
              aria-label='plano'
              name='plano'
              id='plano'
              value={plano}
              onChange={(event) => {
                setPlano(event.target.value)
              }}
            >
              <FormControlLabel
                value='FaleMais 30'
                control={<Radio />}
                label='FaleMais 30'
              />
              <FormControlLabel
                value='FaleMais 60'
                control={<Radio />}
                label='FaleMais 60'
              />
              <FormControlLabel
                value='FaleMais 120'
                control={<Radio />}
                label='FaleMais 120'
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
              setTempo(event.target.value)
            }}
            id='tempo'
            label='Tempo em minutos'
            variant='outlined'
            margin='normal'
            type='number'
            onBlur={resetError}
            required
          />
        </Grid>
        <Grid item xs={4}>
          <CurrencyTextField
            label='Com Fale Mais'
            variant='standard'
            id='comFaleMais'
            value={resultado.comFaleMais}
            currencySymbol='R$'
            outputFormat='string'
            decimalCharacter=','
            digitGroupSeparator='.'
            margin='normal'
            error={erros.valida}
            helperText={erros.texto}
            disabled
          />
        </Grid>
        <Grid item xs={4}>
          <CurrencyTextField
            label='Sem Fale Mais'
            variant='standard'
            id='semFaleMais'
            value={resultado.semFaleMais}
            currencySymbol='R$'
            outputFormat='string'
            decimalCharacter=','
            digitGroupSeparator='.'
            margin='normal'
            error={erros.valida}
            helperText={erros.texto}
            disabled
          />
        </Grid>
      </Grid>
      <Button type='submit' variant='contained' color='primary' id='submit'>
        Calcular
      </Button>
    </form>
  )
}

export default Form
