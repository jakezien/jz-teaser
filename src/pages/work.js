import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Grid from "../components/grid"

const Work = ({ data, location }) => {

  return (
    <Layout location={location}>
      <SEO title="Jake Zien" />

      <h1>Work</h1>
      <Grid posts={data.workPosts.edges} postsPerRow="1" />

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