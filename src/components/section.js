import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { Container } from "../components/layout"

const Section = ({children, bgColor, className}) => {

  let StyledSection = styled.section`
    width: 100%;  
    background: ${bgColor}; 
    * footer {
      background: ${bgColor}; 
      > div {
        padding: ${ rhythm(1) } 0 0 0;
        padding-right: 0;
      }
    }
  `

  
  return (
    <StyledSection className={className}>
      <Container>
        {children}
      </Container>
    </StyledSection>
  )
}

export default Section;