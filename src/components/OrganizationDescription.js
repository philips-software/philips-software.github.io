import React from 'react';
import Box from '@material-ui/core/Box';
import { Container, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(2),
  },
  content: {
    color: 'blue',
  },
}));

const OrganizationDescription = props => {
  const classes = useStyles();
  const { content, children } = props;
  return (
    <Box bgcolor="background.paper">
      <Container className={classes.container}>
        <Typography className={classes.content} gutterBottom={!!children}>
          {content}
        </Typography>
        {children}
      </Container>
    </Box>
  );
};

export default OrganizationDescription;
