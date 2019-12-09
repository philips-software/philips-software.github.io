import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import MainContainer from '../components/MainContainer';
import { MDXProvider } from '@mdx-js/react';
import Typography from '@material-ui/core/Typography';
import { Link, List, ListItem } from '@material-ui/core';

const components = {
  p: props => <Typography {...props} paragraph />,
  h1: props => <Typography variant="h4" {...props} gutterBottom />,
  h2: props => <Typography variant="h5" {...props} gutterBottom />,
  h3: props => <Typography variant="h6" {...props} gutterBottom />,
  h4: props => <Typography variant="h6" {...props} gutterBottom />,
  h5: props => <Typography variant="h6" {...props} gutterBottom />,
  h6: props => <Typography variant="h6" {...props} gutterBottom />,
  ul: props => <List {...props} />,
  li: props => <ListItem dense {...props} />,
  a: Link,
};

const DefaultPageLayout = props => {
  const { children } = props;

  const { title } = props.pageContext.frontmatter;

  console.log(props);
  return (
    <MDXProvider components={components}>
      <Layout>
        <SEO title={title} />
        <PageHeader title={title} />
        <MainContainer>{children}</MainContainer>
      </Layout>
    </MDXProvider>
  );
};

export default DefaultPageLayout;
