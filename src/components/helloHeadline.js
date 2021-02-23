import React from "react"
import Tooltip from "./tooltip"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const StyledH1 = styled.h1`
  display: inline;
  margin-top:0;
  margin-bottom:${rhythm(.5)};
`
const StyledP = styled.p`
  margin: 0;
`

const StyledBr = styled.br`
  @media only screen and (min-width:25rem) {
    display: none;
  }
`

const HelloHeadline = () => {
  return (
    <div>
      <StyledH1>Hey, I'm <StyledBr/>Jake&nbsp;</StyledH1>
      <Tooltip text="Zien">
        <StyledP>Rhymes with <i>lyin',</i> <i>cryin',</i> and&nbsp;<i>dyin'.</i></StyledP>
      </Tooltip>&nbsp;
      <StyledH1>.</StyledH1>
    </div>
  )
}

export default HelloHeadline;
