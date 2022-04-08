import React, { useEffect } from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
import { uniq } from 'ramda';
import { useList } from 'react-use';
import SEO from '../components/SEO';
import MainContainer from '../components/MainContainer';
import PageHeader from '../components/PageHeader';
import BasicSelect from '../components/BasicSelect';
import Repositories from '../components/Repositories';

const IndexPage = ({ data, ...props }) => {
  const languages = uniq(
    data.github.organization.repositories.nodes.map(x =>
      x.primaryLanguage ? x.primaryLanguage.name : 'none',
    ),
  );
  const [selectedLanguages, { set }] = useList([]);
  const [projects, { filter, reset }] = useList(
    data.github.organization.repositories.nodes,
  );

  useEffect(() => {
    console.log('filter');
    reset();
    filter(item => {
      if (selectedLanguages.length === 0) return true;
      if (!item.primaryLanguage && selectedLanguages.includes('none'))
        return true;
      return selectedLanguages.includes(
        item.primaryLanguage && item.primaryLanguage.name,
      );
    });
  }, [selectedLanguages, filter, reset]);

  return (
    <Layout>
      <SEO title="Projects" />
      <PageHeader title="Projects">
        <BasicSelect
          placeholder="Select language"
          value={selectedLanguages}
          options={languages}
          onChange={set}
        />
      </PageHeader>
      <MainContainer>
        <Repositories data={projects} />
      </MainContainer>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  {
    github {
      organization(login: "philips-software") {
        repositories(first: 100, privacy: PUBLIC, isFork: false) {
          nodes {
            ...Repository
          }
        }
      }
    }
  }
`;
