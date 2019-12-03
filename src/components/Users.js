import React from 'react';
import { graphql } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    height: 128,
  },
  cardActionArea: {
    display: 'flex',
  },
  content: {
    alignSelf: 'flex-start',
    flexGrow: 1,
  },
  media: {
    width: 128,
    height: 128,
    flexShrink: 0,
  },
}));

const Users = props => {
  const classes = useStyles();
  const { data } = props;
  console.log(data);
  return (
    <Grid container spacing={4}>
      {data &&
        data
          .filter(node => Boolean(node.name))
          .map(node => (
            <Grid item key={node.id} xs={12} md={6} lg={4}>
              <Card className={classes.card}>
                <CardActionArea
                  href={node.url}
                  target="_blank"
                  className={classes.cardActionArea}
                >
                  <CardMedia className={classes.media} image={node.avatarUrl} />
                  <CardContent className={classes.content}>
                    <Typography variant="h6">{node.name}</Typography>
                    <Typography variant="body2">
                      {node.hovercard.contexts[0].message}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
    </Grid>
  );
};

export default Users;

export const query = graphql`
  fragment User on GitHub_User {
    id
    name
    url
    avatarUrl
    hovercard {
      contexts {
        message
      }
    }
  }
`;
