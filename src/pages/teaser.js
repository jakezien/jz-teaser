import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"

import LayoutMinimal from "../templates/layoutMinimal"
import { rhythm } from "../utils/typography"
import SEO from "../components/seo"
import Container from '../components/container'
import Monogram from "../../content/assets/monogram.svg"

const Center = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  position: relative;
  text-align: center;
  h1 {
    font-size: 8em;
    line-height: 0.8;
    font-weight: 300;
    color: ${props => props.theme.bg4}
  }
`

const MonogramWrap = styled.div`
  position: absolute;
  height: ${rhythm(4)};
  width: ${rhythm(4)};
  left: calc(50% - ${rhythm(2)});
`

const MonogramLink = styled.a`
  display: block;
  transition: transform 0.5s ease;
  #monogram-bg {
    fill: rgb(255, 196, 0);
  }

  &:hover {
    transition: transform 1s ease-out;
    transform: scale(1.1);
    #monogram-bg {
      fill: hsl(46, 100%, 70%) !important;
    }
  }
`

const Teaser = ({ data, location }) => {
  return (
    <LayoutMinimal location={location}>

      <SEO title="Almost done…"/>

      <Container style={{height:'100vh'}}>
        <Center>
          <h1>New site<br/>coming soon</h1>
          <MonogramWrap>
            <MonogramLink href="https://www.youtube.com/embed/5nO7IA1DeeI?autoplay=1">
              <Monogram/>
            </MonogramLink>
          </MonogramWrap>
        </Center>
      </Container>
    
    </LayoutMinimal>
  )
}

export default Teaser