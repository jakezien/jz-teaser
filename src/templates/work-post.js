import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

import Container from "../components/container"
import FullBleedImg from "../components/fullBleedImg"
import PostFooterNav from "../components/postFooterNav"


const WorkPostTemplate = ({ data, pageContext, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const coverImage = data.allFile.edges[0].node.childImageSharp

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />

      <Container>
        <article>

          <FullBleedImg fluid={coverImage.fluid} />

          <header>
            <h1>{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>

          <MDXRenderer>{post.body}</MDXRenderer>
        </article>

        <PostFooterNav pageContext={pageContext} />
      </Container>


    </Layout>
  )
}

export default WorkPostTemplate

export const pageQuery = graphql`
  query WorkPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      slug
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {regex: $slug}}) {
      edges {
        node {
          name
          id
          extension
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
