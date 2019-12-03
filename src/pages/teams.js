import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import MainContainer from '../components/MainContainer';
import Teams from '../components/Teams';

const ReposPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Teams" />
      <PageHeader title="Teams" />
      <MainContainer>
        <Teams data={data.github.organization.teams.nodes} />
      </MainContainer>
    </Layout>
  );
};

export const query = graphql`
  {
    github {
      organization(login: "philips-software") {
        teams(first: 100, privacy: VISIBLE) {
          nodes {
            ...Team
          }
        }
      }
    }
  }
`;

export default ReposPage;
