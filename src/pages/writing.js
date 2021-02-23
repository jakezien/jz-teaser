import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import Layout from "../templates/layout"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Section from '../components/section'

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.bg2};
  padding-bottom: ${rhythm(3)}
`

const Writing = ({ data, location }) => {
  return (
    <Layout location={location}>

      <SEO title="Writing"/>

      <Section>
        <h1>Things That I've Written</h1>
      </Section>
    
      <StyledSection>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </StyledSection>

    </Layout>
  )
}

export default Writing

export const pageQuery = graphql`query {
  site {
    siteMetadata {
      title
    }
  }
  mdx(fields: {slug: {eq: "/writing/"}}) {
    id
    slug
    body
  }
}  
`