import React from "react"
import { Link } from "gatsby"
import PostGrid  from "./postGrid"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"


const Section = styled.section`
  margin-bottom: ${rhythm(4)}
`

const Teaser = ({ posts, title, linkTo, linkText }) => {
  return (
    <Section>
      <h2><Link to={linkTo}>{title}</Link></h2>
      <PostGrid posts={posts} />
      <Link to={linkTo}>{linkText}</Link>
    </Section>
  )
}

export default Teaser