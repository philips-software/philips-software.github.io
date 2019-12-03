import React from 'react';
import Box from '@material-ui/core/Box';
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const PageHeader = props => {
  const classes = useStyles();
  const { title, children } = props;
  return (
    <Box bgcolor="background.paper">
      <Container className={classes.container}>
        <Typography
          className={classes.title}
          variant="h3"
          gutterBottom={!!children}
        >
          {title}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default PageHeader;
