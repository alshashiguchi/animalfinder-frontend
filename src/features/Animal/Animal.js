import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';


import request from '../../services/request';

import VisualizarAnimal from '../Animal/components/Visualizar';
import { withSnackbar } from 'notistack';

export const Animal = ({enqueueSnackbar,...props }) => {
  const [animal, setAnimal] = useState([]);  
  const { id } = props.match.params;

  
  useEffect(() => {
    handleSearchingAnimal();
  }, []);

  const handleSearchingAnimal = async () => {
    
    try {
      const { data } = await request.get(`/animal/${id}`);            
      setAnimal(data);
    } catch (err) {
      enqueueSnackbar(`Houve um erro ao buscar o animal. ${err}`, { variant: 'error' });
    }     
  };
  return (
    <Grid container spacing={2}>      
      <VisualizarAnimal item={animal} props={props} />        
    </Grid>
  );
};


export default withSnackbar(Animal);