const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      github {
        organization(login: "philips-software") {
          teams(first: 100, privacy: VISIBLE) {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  const teams = result.data.github.organization.teams.edges;

  teams.forEach(({ node }) => {
    createPage({
      path: `teams/${node.slug}`,
      component: path.resolve(`./src/templates/team-page.js`),
      context: { slug: node.slug },
    });
  });
};
