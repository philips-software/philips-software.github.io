import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Typography } from '@material-ui/core';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import MainContainer from '../components/MainContainer';
import Users from '../components/Users';
import Repositories from '../components/Repositories';

const TeamPage = ({ data }) => {
  const { name } = data.github.organization.team;
  return (
    <Layout>
      <SEO title={name} />
      <PageHeader title={name} />
      <MainContainer>
        <Repositories data={data.github.organization.team.repositories.nodes} />
      </MainContainer>
      <MainContainer>
        <Typography variant="h5" gutterBottom>
          Members
        </Typography>
        <Users data={data.github.organization.team.members.nodes} />
      </MainContainer>
    </Layout>
  );
};

export default TeamPage;

export const pageQuery = graphql`
  query TeamQuery($slug: String!) {
    github {
      organization(login: "philips-software") {
        team(slug: $slug) {
          name
          members(first: 100) {
            nodes {
              ...User
            }
          }
          repositories(first: 100) {
            nodes {
              ...Repository
            }
          }
        }
      }
    }
  }
`;
