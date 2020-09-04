import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import Img from "gatsby-image"
import styled from "styled-components"

import Resume from "./resume.mdx"
import AboutText from "./aboutText.mdx"

const AboutImg = styled(Img)`
  border-radius: 4px;
  height: 400px;
  width: auto;
  margin-bottom: ${rhythm(2)}; 
  @media screen and (min-width: 641px) {
    width: 50%;
    float: right;    
    margin-right: ${rhythm(1)};
  }
`

const About = ({ data, location }) => {

  return (
    <Layout>
      <SEO title="About" />
        <h1>About</h1>
        <AboutImg 
          fluid = {{ ...data.jakey.childImageSharp.fluid }}
          imgStyle = "object-fit:contain"
        />
      <AboutText/>
      <Resume/>
    </Layout>
  )
}

export default About


export const pageQuery = graphql`
  query {
    jakey: file(relativePath: { regex: "/jakey0/i" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;