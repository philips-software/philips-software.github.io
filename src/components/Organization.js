import React from 'react';
import MainContainer from './MainContainer';
import PageHeader from './PageHeader';
import Repositories from './Repositories';

const Organization = props => {
  const { organization, projects } = props;
  return (
    <div>
      <PageHeader title={organization}></PageHeader>
      <MainContainer>
        <Repositories data={projects} />
      </MainContainer>
    </div>
  );
};

export default Organization;
