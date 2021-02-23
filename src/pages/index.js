import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

import Layout from "../templates/layout"

import Section from '../components/section'
import TCensor from '../components/tCensor'
import Pixellator from '../components/pixellator'

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
const FavoriteSection = styled(Section)`
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
        <Do posts={data.work.edges} postCoverImages={data.workCoverImages.nodes} />
      </DoSection>

      <FavoriteSection>
        <Like posts={data.favorites.edges} postCoverImages={data.favoritesCoverImages.nodes} />
      </FavoriteSection>
      
      <TCensor/>
      <Pixellator/>
    </Layout>
  )
}

export default Home

export const pageQuery = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  work: allMdx(filter: {fileAbsolutePath: {regex: "\\/content/work/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
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
        }
      }
    }
  }
  workCoverImages: allFile(filter: {absolutePath: {regex: "\\/content/work/.*/cover/"}}) {
    nodes {
      relativeDirectory
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }

  favorites: allMdx(limit: 12, filter: {fileAbsolutePath: {regex: "\\/content/favorites/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        body
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
          imageMargin
          coverImage {
            childImageSharp {
              gatsbyImageData(width: 400, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }

  favoritesCoverImages: allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, absolutePath: {regex: "\\/content/favorites/"}}) {
    nodes {
      name
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio:1, backgroundColor:"transparent", transformOptions:{fit:CONTAIN})
      }
    }
  }

}
`