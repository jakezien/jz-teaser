import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const StyledDiv = styled.div`
  max-width: ${rhythm(44)};
  padding: ${rhythm(1)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
  margin: 0 auto;
  overflow: visible;
`

const Container = ({children}) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default Container;