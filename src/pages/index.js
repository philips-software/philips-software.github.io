import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import MainContainer from '../components/MainContainer';
import PageHeader from '../components/PageHeader';
import Repositories from '../components/Repositories';

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <PageHeader title="Pinned projects" />
      <MainContainer>
        <Repositories data={data.github.organization.pinnedItems.nodes} />
      </MainContainer>
    </Layout>
  );
};

export const query = graphql`
  {
    github {
      organization(login: "philips-software") {
        pinnedItems(first: 10) {
          nodes {
            ... on GitHub_Repository {
              ...Repository
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
