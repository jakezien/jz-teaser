import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Grid from "../components/grid"

const Things = ({ data, location }) => {

  return (
    <Layout location={location}>
      <SEO title="Jake Zien" />

      <h1>Things</h1>
      <Grid posts={data.posts.edges} postsPerRow="2"/>

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