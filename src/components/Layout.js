/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import Header from './Header';
import { CssBaseline, makeStyles } from '@material-ui/core';
import 'typeface-roboto';
import Footer from './Footer';
import { ThemeProvider } from '@material-ui/core/styles';
import createTheme from '../utils/createTheme';

const theme = createTheme();
const useStyles = makeStyles(theme => ({
  main: { marginTop: 48, minHeight: 'calc(100vh - 64px - 48px)' },
}));

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main className={classes.main}>{children}</main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
