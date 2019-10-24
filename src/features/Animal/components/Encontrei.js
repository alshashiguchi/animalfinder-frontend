import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import request from '../../../services/request';

export const EncontreiAnimal = ({props}) => {
  const [encontrei, setEncontrei] = useState({
    encontrei_nome: '',
    encontrei_telefone: ''
  });
  
  const handleSearchingAnimal = async () => {       
    const { id } = props.match.params;

    const response = await request.put(`/v1/animal/${id}/encontrei`, {
      headers: {
          "Accept": "application/json",
          "Content-type": "application/json"
      }
    });    
  };

  const handleChange = (value, campo) => setEncontrei( { ...encontrei, [campo]: value }  );
  
  return (    
    <Grid container spacing={2}>
    <Grid item xs={4}>
      <TextField
        id="nome"
        label="Nome"
        fullWidth
        onChange={e => handleChange(e.target.value, "encontrei_nome")}
      />
    </Grid>
    <Grid item xs={2}>
      <TextField
        id="telefone"
        label="Telefone"
        fullWidth            
        onChange={e => handleChange(e.target.value, "encontrei_telefone")}
      />
    </Grid>        
    <Grid item xs={2}>
      <Button onClick = {() => handleSearchingAnimal()}>
        Encontrei
      </Button>
    </Grid>
  </Grid>
    
  );
};

export default EncontreiAnimal;
