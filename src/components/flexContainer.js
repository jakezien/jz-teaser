import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Container from "../components/container"

let StyledDiv = styled.div`
  width: 100%;  
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: ${rhythm(1)};

  div {
    flex: 1 0 auto;
    padding: 0 .5rem;
    margin-bottom: 0 !important;
  }

  @media screen and (max-width: ${props => props.breakpoint}) {
      display: block;
      div {
        margin-bottom: ${rhythm(1)}
      }
  }
`

const FlexContainer = (props) => {
  return (
    <StyledDiv {...props}>
      {props.children}
    </StyledDiv>
  )
}

export default FlexContainer;
