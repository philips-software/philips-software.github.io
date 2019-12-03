import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
}));

const MainContainer = props => {
  const classes = useStyles();
  const { children } = props;
  return <Container className={classes.container}>{children}</Container>;
};

export default MainContainer;
