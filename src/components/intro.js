import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import Monogram from "./monogram"
import Tooltip from "./tooltip"

const Container = styled.div`
  margin-top: ${rhythm(1)};
  margin-bottom: ${rhythm(2)};
  max-width: ${rhythm(26)};
`

const StyledH2 = styled.h1`
  display: inline-block;
  margin-top:0;
  margin-bottom:${rhythm(.5)};
`

const Intro = () => {
  return (
    <Container>
      <StyledH2>Hey, I'm Jake&nbsp;</StyledH2>
      <Tooltip text="Zien">
        Rhymes with <i>lyin',</i> <i>cryin',</i> and&nbsp;<i>dyin'.</i>
      </Tooltip>
      <StyledH2>.</StyledH2>
      <p>
        I'm a design generalist, working across the product process in business strategy, UX research and execution, identity development, and visual design.
        <br/>
        <Link to="/about">More about me.</Link>
      </p>
    </Container>
  )
}

export default Intro