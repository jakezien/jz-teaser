import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../templates/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components"
import Section from "../components/section"

import Resume from "./resume.js"
import AboutText from "./aboutText.mdx"

const StyledSection = styled(Section)`
  > div {
    padding-left: 0;
    padding-right: 0;
  }
`

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

const StyledWrapper = styled.div`
  border-radius: 4px;
  background: #fcfcfc;
  padding: ${rhythm(1)};
`

const About = ({data, location}) => {


  return (
    <Layout location={location}>
      <SEO title="About" />
      <StyledSection>
        <h1>About</h1>
        <AboutImg 
          fluid= {{ ...data.jakey.childImageSharp.gatsbyImageData, aspectRatio:0.75}}
          objectFit= "contain"
          imgStyle= {{objectFit: "contain"}}
        />
        <AboutText/>
      </StyledSection>
      <StyledSection>
        <h1>What I've done</h1>
        <Resume/>
      </StyledSection>
    </Layout>
  );
}

export default About


export const pageQuery = graphql`{
  jakey: file(relativePath: {regex: "/jakey0/i"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}
`;