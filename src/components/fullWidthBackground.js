import React from "react"
import { rhythm } from "../utils/typography"
import styled from "styled-components"



const FullWidthBackground = ({ color, children }) => {

  const Container = styled.div`
    max-width: ${rhythm(40)};
    padding: ${rhythm(1)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
    margin: 0 auto;
    position: relative;
  `

  const StyledDiv = styled.div`
    width: 100vw;
    height: 100px;
    position: absolute;
    z-index: 0;
    margin: 0;
    background-color: ${color};
    left: 0;
  ` 
  return (
    <Container>
      <StyledDiv /> 
      {children}
    </Container>
  )
}

export default FullWidthBackground
