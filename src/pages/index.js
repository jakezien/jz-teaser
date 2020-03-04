import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import Intro from "../components/intro"
import WorkTeaser from "../components/workTeaser"
import ThingsTeaser from "../components/thingsTeaser"

const Home = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="Jake Zien" />

      <Intro />
      <WorkTeaser posts={data.workPosts.edges}/>
      <ThingsTeaser posts={data.thingsPosts.edges}/>

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
    thingsPosts: allMdx(
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