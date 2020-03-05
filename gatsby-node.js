const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const result = await graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allMdx.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  function nthIndex(str, pat, n){
      var L= str.length, i= -1;
      while(n-- && i++<L){
          i= str.indexOf(pat, i);
          if (i < 0) break;
      }
      return i;
  }

  if (node.internal.type === `Mdx`) {
    let value;
    if (node.frontmatter.slug) 
      value = node.frontmatter.slug
    else {
      let path = createFilePath({ node, getNode })
      // Make the url scheme for projects '…/work/<category>-<project>'
      // instead of '…/work/<category>/<project>'
      if (path.match(/\//g || []).length > 3) {
        let index = nthIndex(path, '/', 3)
        path = path.substring(0, index) + '-' + path.substring(index + 1);
      }
      value = path
    }
    console.log(value)

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
