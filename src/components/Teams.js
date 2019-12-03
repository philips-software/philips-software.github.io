import React from 'react';
import { graphql, Link } from 'gatsby';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core';
import Octicon, { Person, RepoForked } from '@primer/octicons-react';

const useStyles = makeStyles(theme => ({
  card: {
    height: theme.spacing(16),
  },
  actionArea: {
    display: 'flex',
  },
  media: {
    height: 128,
    width: 128,
    flexShrink: 0,
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    alignSelf: 'stretch',
  },
  text: {
    flexGrow: 1,
    marginRight: theme.spacing(2),
  },
  title: {
    fontSize: 18,
    lineHeight: '1.1em',
  },
  meta: {
    alignSelf: 'flex-end',
    flexShrink: 0,
  },
}));

const Teams = props => {
  const classes = useStyles();
  const { data } = props;
  return (
    <Grid container spacing={4}>
      {data &&
        data.map(node => (
          <Grid item xs={12} md={6} lg={4} key={node.id}>
            <Card className={classes.card}>
              <CardActionArea
                className={classes.actionArea}
                to={`/teams/${node.slug}`}
                component={Link}
              >
                <CardMedia image={node.avatarUrl} className={classes.media} />
                <CardContent className={classes.content}>
                  <div className={classes.text}>
                    <Typography variant="h6" className={classes.title}>
                      {node.name}
                    </Typography>
                    <Typography variant="subtitle2">
                      {node.description}
                    </Typography>
                  </div>
                  <div className={classes.meta}>
                    <div>
                      <Octicon icon={RepoForked} />{' '}
                      {node.repositories.totalCount}
                    </div>
                    <div>
                      <Octicon icon={Person} /> {node.members.totalCount}
                    </div>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Teams;

export const query = graphql`
  fragment Team on GitHub_Team {
    id
    slug
    name
    members {
      totalCount
    }
    description
    repositories {
      totalCount
    }
    avatarUrl
  }
`;
