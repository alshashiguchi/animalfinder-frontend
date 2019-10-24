import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import Header from './components/Header';
import Navigation from './components/Nevigation';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%'
  },
  mainContent: {
    padding: theme.spacing(4, 0, 2)
  }
}));

export const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <nav>
        <Hidden smUp implementation="js">
          <Navigation
            open={open}
            setOpen={() => setOpen(!open)}
          />
        </Hidden>
      </nav>
      <div className={classes.root}>
        <Header open={open}/>
        <main className={classes.mainContent}>
          <Container fixed>
            {children}
          </Container>
        </main>
      </div>
    </>
  )
};

export default MainLayout;
