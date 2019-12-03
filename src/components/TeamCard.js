import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  makeStyles,
  Typography,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const useStyles = makeStyles(theme => ({
  card: {},
}));

const TeamCard = props => {
  const classes = useStyles({});
  const { name, url } = props;

  return (
    <Card className={classes.card}>
      <CardActionArea component={Link} to={url}>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default TeamCard;
