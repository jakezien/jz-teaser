import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import Monogram from "./monogram"

const Container = styled.div`
  margin-top: ${rhythm(1.5)};
  margin-bottom: ${rhythm(3)}
`


const Intro = () => {
  return (
    <Container>
      Hey, I'm Jake Zien. I'm a design generalist, working across the product process in business strategy, UX research and execution, identity development, and visual design. <Link to="/about">More about me.</Link>
    </Container>
  )
}

export default Intro