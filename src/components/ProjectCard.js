import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { formatDistance } from 'date-fns';
import Octicon, { Person, RepoForked, Star } from '@primer/octicons-react';

const useStyles = makeStyles(theme => ({
  card: { height: '100%', display: 'flex', flexDirection: 'column' },
  cardContent: { flexGrow: 1 },
  description: {
    height: theme.spacing(8),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));

const ProjectCard = props => {
  const classes = useStyles();
  const {
    name,
    description,
    url,
    updatedAt,
    totalStarGazers,
    totalForks,
    language,
    totalCollaborators,
  } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea
        className={classes.cardContent}
        href={url}
        target="_blank"
      >
        <CardContent>
          <Typography gutterBottom variant="h6">
            {name}
          </Typography>
          <Typography gutterBottom color="textSecondary" variant="body2">
            Updated {formatDistance(new Date(updatedAt), new Date())} ago
          </Typography>
          {language && (
            <Typography gutterBottom color="textSecondary" variant="body2">
              {language}
            </Typography>
          )}
          <Typography className={classes.description}>{description}</Typography>
          {/*<div>{collaborators.totalCount}</div>*/}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button href={url} color="primary" target="_blank">
          Source
        </Button>
        <Button endIcon={<Octicon icon={Star} />}>{totalStarGazers}</Button>
        <Button endIcon={<Octicon icon={RepoForked} />}>{totalForks}</Button>
        <Button endIcon={<Octicon icon={Person} />}>
          {totalCollaborators}
        </Button>
      </CardActions>
    </Card>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
  updatedAt: PropTypes.string.isRequired,
  totalStarGazers: PropTypes.number.isRequired,
  totalCollaborators: PropTypes.number.isRequired,
  totalForks: PropTypes.number.isRequired,
  language: PropTypes.string,
};

export default ProjectCard;
