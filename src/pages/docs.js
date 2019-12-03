import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PageHeader from '../components/PageHeader';
import React from 'react';
import MainContainer from '../components/MainContainer';
import Typography from '@material-ui/core/Typography';

const DocsPage = () => {
  return (
    <Layout>
      <SEO title="Docs" />
      <PageHeader title="How to open source" />
      <MainContainer>
        <Typography variant="h5" gutterBottom>
          1. Purpose
        </Typography>
        <Typography gutterBottom>
          This document has been created by the Philips [Open Source
          Team](#contact) and publicly describes Philips policy on open sourcing
          (publishing).
        </Typography>
        <Typography gutterBottom>
          Philips employees: please read the [internal
          version](https://gitlab.ta.philips.com/open-source/howto-open-source),
          which contains additional instructions and a few internal links.
        </Typography>
        <Typography variant="h5" gutterBottom>
          2. Motivation
        </Typography>
        <Typography gutterBottom>
          Open source software and the principles of the open source software
          development model are well in line with the Philips Accelerate
          program. Using and contributing to open source software provides an
          opportunity for Philips to delight our customers by reducing time to
          market and product development costs.
        </Typography>
        <Typography variant="h6" gutterBottom>
          2.1 Publication via github
        </Typography>
        <Typography gutterBottom>
          For now, open source projects release by and maintained by Philips
          will be available via this github account.
        </Typography>
        <Typography variant="h6" gutterBottom>
          2.2 License
        </Typography>
        <Typography gutterBottom>
          Unless stated otherwise, Philips contributions are licensed under the
          [MIT License](https://spdx.org/licenses/MIT.html).
        </Typography>
        <Typography variant="h5" gutterBottom>
          3.Contact
        </Typography>
        <Typography gutterBottom>
          Each project lists the maintainer(s) - they are the prime contacts for
          the project. For any other queries, please contact the Philips Open
          Source Team:
        </Typography>
        <ul>
          <li>
            <a href="https://github.com/marcinczenko">Marcin Czenko</a>
          </li>
          <li>
            <a href="http://github.com/bartgolsteijn/">Bart Golsteijn</a>
          </li>
          <li>
            <a href="https://github.com/ralphholdorp">Ralph Holdorp</a>
          </li>
          <li>
            <a href="https://github.com/jeroenknoops">Jeroen Knoops</a>
          </li>
          <li>
            <a href="https://github.com/ArnoldNiessen">Arnold Niessen</a>
          </li>
          <li>
            <a href="https://github.com/npalm">Niek Palm</a>
          </li>
        </ul>
      </MainContainer>
    </Layout>
  );
};

export default DocsPage;
