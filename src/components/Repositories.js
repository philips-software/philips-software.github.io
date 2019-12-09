import React from 'react';
import { graphql } from 'gatsby';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Avatar,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { formatDistance } from 'date-fns';
import Octicon, { Person, RepoForked, Star } from '@primer/octicons-react';
import Grid from '@material-ui/core/Grid';
import * as CodeIcons from './CodeIcons';
const useStyles = makeStyles(theme => ({
  card: { height: '100%', display: 'flex', flexDirection: 'column' },
  cardContent: { flexGrow: 1 },
  description: {
    height: theme.spacing(8),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const renderCodeIcon = lang => {
  const Icon = CodeIcons[lang];
  if (Icon) {
    return <Icon width={32} height={32} />;
  }
  return null;
};

const Repositories = props => {
  const classes = useStyles();
  const { data } = props;
  return (
    <Grid container spacing={4}>
      {data &&
        data.map(node => (
          <Grid item xs={12} md={6} lg={4} key={node.id}>
            <Card className={classes.card}>
              <CardActionArea
                className={classes.cardContent}
                href={node.url}
                target="_blank"
              >
                <CardContent>
                  <Typography gutterBottom variant="h6">
                    {node.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    color="textSecondary"
                    variant="body2"
                  >
                    Updated{' '}
                    {formatDistance(new Date(node.updatedAt), new Date())} ago
                  </Typography>
                  <Avatar>
                    {renderCodeIcon(
                      node.primaryLanguage && node.primaryLanguage.name,
                    )}
                  </Avatar>
                  <Typography className={classes.description}>
                    {node.description}
                  </Typography>
                  {/*<div>{collaborators.totalCount}</div>*/}
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button href={node.url} color="primary" target="_blank">
                  Source
                </Button>
                <Button endIcon={<Octicon icon={Star} />}>
                  {node.stargazers.totalCount}
                </Button>
                <Button endIcon={<Octicon icon={RepoForked} />}>
                  {node.stargazers.totalCount}
                </Button>
                <Button endIcon={<Octicon icon={Person} />}>
                  {node.stargazers.totalCount}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};

export default Repositories;

export const query = graphql`
  fragment Repository on GitHub_Repository {
    id
    name
    description
    updatedAt
    url
    forks {
      totalCount
    }
    stargazers {
      totalCount
    }
    homepageUrl
    owner {
      id
      login
    }
    primaryLanguage {
      name
      color
    }
  }
`;
