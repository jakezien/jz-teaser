import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { Container } from "../components/layout"

const Section = ({children, bgColor, className}) => {

  let StyledSection = styled.section`
    width: 100%;  
    background: ${bgColor}; 
  `

  
  return (
    <StyledSection className={className} style={{backgroundColor:bgColor}}>
      <pre>{bgColor}</pre>
      <Container>
        {children}
      </Container>
    </StyledSection>
  )
}

export default Section;