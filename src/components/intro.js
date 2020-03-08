import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

const Container = styled.div`
  margin-bottom: ${rhythm(3)}
`


const Intro = () => {
  return (
    <Container>
      Hey, I'm Jake Zien. <Link to="/about">More about me.</Link>
    </Container>
  )
}

export default Intro