import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Container from "../components/container"

let StyledSection = styled.section`
  width: 100%;  
  background: ${props => props.bgcolor}; 
  * footer {
    background: ${props => props.bgcolor}; 
    > div {
      padding: ${ rhythm(1) } 0 0 0;
      padding-right: 0;
    }
  }
`

const Section = (props) => {
  return (
    <StyledSection {...props}>
      <Container>
        {props.children}
      </Container>
    </StyledSection>
  )
}

export default Section;