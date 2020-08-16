import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import PostGrid from "../components/postGrid"

const Work = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="Jake Zien" />

      <h1>Work</h1>
      <PostGrid posts={data.workPosts.edges} postsPerRow="1" />

    </Layout>
  )
}

export default Work


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    workPosts: allMdx(
      filter: { fileAbsolutePath: {regex: "\\/content/work/"} },
      sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
            }
          }
        }
    }
  }
`