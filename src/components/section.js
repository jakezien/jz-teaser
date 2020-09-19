import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"


export const Container = styled.div`
  max-width: ${rhythm(40)};
  padding: ${rhythm(1)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
  margin: 0 auto;
  overflow: visible;
`


const Section = ({children, bgColor, className}) => {

  const StyledSection = styled.section`
    width: 100%;  
    background-color: ${bgColor};  
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