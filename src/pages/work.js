import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../templates/layout"
import { rhythm } from "../utils/typography"

import SEO from "../components/seo"
import Section from '../components/section'
import Grid from "../components/grid"
import WorkPostCard from "../../src/templates/workPostCard"


const StyledSection = styled(Section)`
  background-color: ${props => props.theme.bg2};
`

const Work = ({ data, location }) => {

  return (
    <Layout location={location}>

      <SEO title="Work" />

      <Section>
        <h1>Things That I've Worked On</h1>
      </Section>
    
      <StyledSection>
        <Grid posts={data.work.edges} 
              postCoverImages={data.coverImages.nodes}
              postTemplate={WorkPostCard} 
              postsPerRow="2"
        />
      </StyledSection>

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

    work: allMdx(
      filter: { fileAbsolutePath: {regex: "\\/content/work/"}},
      sort: { fields: [frontmatter___date], order: DESC } ) {
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
    
    coverImages: allFile(filter: {absolutePath: {regex: "\\/content/work/.*/cover/"}}) {
      nodes {
        relativeDirectory
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }

  }
`