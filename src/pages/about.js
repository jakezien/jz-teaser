import React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx"

import styled from "styled-components"
import Layout from "../templates/layout"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Section from "../components/section"

import Resume from "./resume.js"

const AboutImg = styled(GatsbyImage)`
  border-radius: 4px;
  margin-bottom: ${rhythm(2)}; 
  max-height: ${rhythm(18)}; 
  @media screen and (min-width: 641px) {
    max-height: inherit ;
    width: 50%;
    float: right;    
    margin-left: ${rhythm(2)};
  }
`

const About = ({data, location}) => {

  return (
    <Layout>
      <SEO title="About" />

      <Section>
        <h1>About</h1>
        {/*IMAGE*/}
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Section>

      <Section>
        <h1>What I've done</h1>
        <Resume/>
      </Section>

    </Layout>
  );
}

export default About


export const pageQuery = graphql`query About {
  site {
    siteMetadata {
      title
    }
  }
  mdx(fields: {slug: {regex: "/about/"}}) {
    id
    slug
    body
  }
}  
`