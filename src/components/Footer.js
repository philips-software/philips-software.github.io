import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles, Toolbar } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  footer: { display: 'flex', alignItems: 'center', height: 64 },
  title: { marginRight: theme.spacing(4) },
  button: { textDecoration: 'none' },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box bgcolor="secondary.main">
      <Container component="footer" className={classes.footer}>
        <Typography variant="h6" className={classes.title}>
          Philips Open Source
        </Typography>
        <Button
          className={classes.button}
          component={Link}
          color="inherit"
          to="/privacy"
        >
          Privacy
        </Button>
        <Button className={classes.button} component={Link} to="/terms">
          Terms
        </Button>
      </Container>
    </Box>
  );
};
export default Footer;
