import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { withSnackbar } from 'notistack';

import SignIn from './components/SignIn';

export const Home = ({ enqueueSnackbar }) => {
  const [usuario, setUsuario] = useState({
    usuario: '',
    password: ''
  });

  // useEffect(() => {
  //   handleSearchingAnimal();
  // }, []);

  // const handleSearchingAnimal = async () => {
  //   try {
  //     const { data } = await request.get('/animal');

  //     setAnimais(data.rows);
  //   } catch (err) {
  //     enqueueSnackbar(`Houve um erro ao buscar os animais. ${err}`, { variant: 'error' });
  //   }
  // };

  return (
    <Grid container spacing={2}> 
      <SignIn />     
    </Grid>
  );
};

export default withSnackbar(Home);
