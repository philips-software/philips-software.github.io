import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import {
  AppBar,
  Button,
  fade,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  title: {
    marginRight: theme.spacing(4),
    textDecoration: 'none',
    cursor: 'pointer',
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Toolbar variant="dense">
        <Typography
          component={Link}
          to="/"
          className={classes.title}
          variant="h6"
          color="inherit"
          noWrap
        >
          {siteTitle}
        </Typography>
        <div className={classes.grow} />
        <Button component={Link} to="/projects" color="inherit">
          Projects
        </Button>
        <Button component={Link} to="/teams" color="inherit">
          Teams
        </Button>
        <Button component={Link} to="/docs" color="inherit">
          Docs
        </Button>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <Search />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
