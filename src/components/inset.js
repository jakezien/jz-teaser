import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const sides = ['right', 'left'];
const side = props => sides[props.left | 0]
const otherSide = props => sides[!props.left | 0]


const StyledDiv = styled.div`
  @media screen and (min-width: 641px) {
    max-width: calc(50% - ${rhythm(1.5)});
    float: ${side};
    margin-${otherSide}: ${rhythm(1)};
  }
`

const Inset = (props) => {

  return (
    <StyledDiv {...props}>
      {props.children}
    </StyledDiv>
  )
}

export default Inset;