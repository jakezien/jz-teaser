import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import PostGrid from "../components/postGrid"

const Things = ({ data, location }) => {

  return (
    <Layout location={location}>
      <SEO title="Jake Zien" />

      <h1>Things</h1>
      <PostGrid posts={data.posts.edges} postsPerRow="2"/>

    </Layout>
  )
}

export default Things


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    posts: allMdx(
      filter: { fileAbsolutePath: {regex: "\\/content/things/"} },
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