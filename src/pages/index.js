import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const Home = ({ data, location }) => {
  const workPosts = data.allMdx.edges

  return (
    <Layout>
      <SEO title="Jake Zien" />
      {workPosts.map(({node}) => {
        return(
          <div>{node.excerpt}</div>
          )
      })}
    </Layout>
  )
}

export default Home


export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
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