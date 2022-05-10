import React, { useState, useEffect } from 'react';
import MainContainer from './MainContainer';
import PageHeader from './PageHeader';
import Repositories from './Repositories';
import OrganizationDescription from './OrganizationDescription';

const Organization = props => {
  const { organization, projects, description } = props;

  return (
    <div>
      <PageHeader title={organization}></PageHeader>
      <OrganizationDescription>{description}</OrganizationDescription>
      <MainContainer>
        <Repositories data={projects} />
      </MainContainer>
    </div>
  );
};

export default Organization;
