import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Container from "../components/container"

let StyledSection = styled.section`
  width: 100%;  
  background: ${props => props.bgColor}; 
  * footer {
    background: ${props => props.bgColor}; 
    > div {
      padding: ${ rhythm(1) } 0 0 0;
      padding-right: 0;
    }
  }
`

const Section = ({children, bgColor, className}) => {
  return (
    <StyledSection className={className} bgColor={bgColor}>
      <Container>
        {children}
      </Container>
    </StyledSection>
  )
}

export default Section;