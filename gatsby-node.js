const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { createExif } = require(`./createExif`)


exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions


}



  

exports.onCreateNode = ({ node, actions, getNode, createNodeId }) => {
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
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  if (node.internal.mediaType === 'image/jpeg' && node.absolutePath.includes('jakestagram')) {
    createExif(node, actions, createNodeId)
  }
}
