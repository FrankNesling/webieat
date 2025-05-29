/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions }) => {
    // redirect index.js to home.js
    const { createRedirect } = actions;
    createRedirect({
        fromPath: `/`,
        toPath: `/home`,
        redirectInBrowser: true,
        isPermanent: true,
    });
}
