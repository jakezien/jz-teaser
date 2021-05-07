import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import styled from "styled-components"
import Layout from "../templates/layout"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Section from "../components/section"
import { imageByName, testFunc } from "../utils/functions";

import Resume from "./resume.js"

const About = (props) => {

  return (
    <Layout>
      <SEO title="About" />

      <MDXRenderer {...props} images={props.data.allFile.nodes}>{props.data.mdx.body}</MDXRenderer>
{/*
      <Section>
        <h1>What I've done</h1>
        <Resume/>
      </Section>*/}

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
  mdx(fields: {slug: {regex: "\\/about/(?!story)/"}}) {
    id
    slug
    body
  }
  allFile(filter: {
    absolutePath: {regex: "\\/content/about/"}, 
    extension: {regex: "/(jpg)|(jpeg)|(png)/"}
  }) {
    nodes {
      name
      id
      extension
      childImageSharp {
        gatsbyImageData(layout:CONSTRAINED)
        original {
          src
          height
          width
        }
      }
    }
  }
}  
`