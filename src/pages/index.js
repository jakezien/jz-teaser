import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

import Layout from "../templates/layout"

import Container from '../components/container'
import Section from '../components/section'
import Header from '../components/header'
import Footer from '../components/footer'
import Teaser from "../components/teaser"

import Hello from "../../content/index/hello"
import Think from "../../content/index/think"
import Do from "../../content/index/do"
import Like from "../../content/index/like"

const ThinkSection = styled(Section)`
  background-color: ${props => props.theme.bg1};
`
const DoSection = styled(Section)`
  background-color: ${props => props.theme.bg2};
`
const LikeSection = styled(Section)`
  background-color: ${props => props.theme.bg3};
`

const Home = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="Jake Zien" />

      <Section>
        <Hello />
      </Section>

      <ThinkSection>
        <Think />
      </ThinkSection>

      <DoSection>
        <Do work={data.work.edges}/>
      </DoSection>

      <LikeSection>
        <Like likes={data.likes.edges}/>
      </LikeSection>
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

    work: allMdx(
      filter: { fileAbsolutePath: {regex: "\\/content/work/"} },
      sort: { fields: [frontmatter___date], order: DESC }
    ){
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            oneliner
            company
            description
            type
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

    likes: allMdx(
    limit: 8,
    filter: { fileAbsolutePath: {regex: "\\/content/likes/"} },
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
            oneliner
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