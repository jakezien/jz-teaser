import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const StyledDiv = styled.div`
  padding: ${rhythm(1)};
  margin: 0 auto;
  overflow: visible;
  @media screen and (min-width: 768px) {
    max-width: ${rhythm(40)};
    padding: ${rhythm(1)} ${rhythm(3)};
  }
`

const Container = ({children}) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default Container;