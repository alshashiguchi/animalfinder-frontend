import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardLink: {
    textDecoration: 'none',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  }
}));

export const CardComponent = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={item.foto || 'https://animalfinder-imagem.s3.amazonaws.com/SEM-IMAGEM-13.jpg'}
        title={item.nome}
      />
      <CardContent className={classes.cardContent}>
        <Typography gutterBottom variant="h5" component="h2">
          {item.nome}
        </Typography>
        <Typography variant="body2">
          {item.informacoes_adicionais}
        </Typography>
      </CardContent>
      <CardActions>
        <Link className={classes.cardLink} to={ `/visualizar/${item.id}` }>
          <Button size="small" color="primary">
            Visualizar
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardComponent;
