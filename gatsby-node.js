const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const page = require.resolve("./src/templates/page.js")

  const result = await wrapper(
    graphql(`
      {
        allDatoCmsPage {
          edges {
            node {
              slug
              title
            }
          }
        }
      }
    `)
  )

  const pageResults = result.data.allDatoCmsPage.edges

  pageResults.forEach(edge => {
    createPage({
      path: `/${edge.node.slug}`,
      component: page,
      context: {
        slug: edge.node.slug,
        title: edge.node.title,
      },
    })
  })
}
