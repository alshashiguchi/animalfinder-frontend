import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export const Cidades = () => (
         <Select
           inputProps={{
             name: "Cidade",
             id: "cidade"
           }}
           fullWidth
         >
           <MenuItem>Marília</MenuItem>
           <MenuItem>Tupã</MenuItem>
         </Select>
       );

export default Cidades;
