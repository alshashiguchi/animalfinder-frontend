import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Routes from './Routes';

export const App = () => (
  <BrowserRouter>
    <SnackbarProvider preventDuplicate maxSnack={5}>
      <Routes />
    </SnackbarProvider>
  </BrowserRouter>
);

export default App;
