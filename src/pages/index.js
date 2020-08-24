import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

import Intro from "../components/intro"
import Teaser from "../components/teaser"

const Home = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="Jake Zien" />
      <Intro />
      <Teaser posts={data.workPosts.edges} title="Work" linkTo="/work" linkText="All work"/>
      <Teaser posts={data.thingsPosts.edges} title="Things" linkTo="/things" linkText="All things" postsPerRow="4"/>
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
      limit: 4,
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
              category
              coverImage {
                childImageSharp {
                  fluid(maxWidth: 400, maxHeight: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
                          }
          }
        }
    }
    thingsPosts: allMdx(
      limit: 8,
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
              category
              author
              artist
              imagePadding
              coverImage {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
    }
  }
`