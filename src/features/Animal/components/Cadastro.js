import React, { useState } from 'react';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';

import Cidades from './components/Cidades';

export const CadastroAnimal = () => {
  const [cadastroAnimal, setCadastroAnimal] = useState({
    nome: '',
    idade: 0,
    informacoes_adicionais: '',
    data_desaparecimento: new Date(),
    cidade: '',
    estado: ''
  });

  const handleChange = (value, campo) => setCadastroAnimal({[campo]: value});
  
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            id="nome"
            label="Nome"
            fullWidth
            onChange={e => handleChange(e.target.value, "nome")}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            id="idade"
            label="Idade"
            fullWidth
            type="number"
            onChange={e => handleChange(e.target.value, "idade")}
          />
        </Grid>
        <Grid item xs={3}>
          <Cidades />
        </Grid>
        <Grid item xs={3}>
          <Cidades />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="informacoes_adicionais"
            multiline
            label="Informações"
            fullWidth
            rows={3}
            onChange={e => handleChange(e.target.value, "informacoes_adicionais")}
          />
        </Grid>
        <Grid item xs>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Data desaparecimento"
            format="dd/MM/yyyy"
            value={cadastroAnimal.data_desaparecimento}
            onChange={(e) => handleChange(e, "data_desaparecimento")}
            KeyboardButtonProps={{
              "aria-label": "Alterar data"
            }}
          />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

export default CadastroAnimal;
