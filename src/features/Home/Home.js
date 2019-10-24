import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { withSnackbar } from 'notistack';

import Card from './components/Card';
import request from '../../services/request';

export const Home = ({ enqueueSnackbar }) => {
  const [animais, setAnimais] = useState([]);

  useEffect(() => {
    handleSearchingAnimal();
  }, []);

  const handleSearchingAnimal = async () => {
    try {
      const { data } = await request.get('/animal');

      setAnimais(data.rows);
    } catch (err) {
      enqueueSnackbar(`Houve um erro ao buscar os animais. ${err}`, { variant: 'error' });
    }
  };

  return (
    <Grid container spacing={2}>
      { animais.map(item => (
        <Grid key={item.id} item xs={4}>
          <Card item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withSnackbar(Home);
