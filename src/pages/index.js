import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import Organization from '../components/Organization';

const IndexPage = ({ data, ...props }) => {
  return (
    <Layout>
      <SEO title="Projects" />
      <Organization
        organization="philips-software"
        projects={data.github.psOrganization.repositories.nodes}
      />
      <Organization
        organization="philips-labs"
        projects={data.github.plOrganization.repositories.nodes}
      />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    github {
      psOrganization: organization(login: "philips-software") {
        repositories(
          first: 12
          privacy: PUBLIC
          isFork: false
          orderBy: { field: STARGAZERS, direction: DESC }
        ) {
          nodes {
            ...Repository
          }
        }
      }
      plOrganization: organization(login: "philips-labs") {
        repositories(
          first: 12
          privacy: PUBLIC
          isFork: false
          orderBy: { field: STARGAZERS, direction: DESC }
        ) {
          nodes {
            ...Repository
          }
        }
      }
    }
  }
`;
