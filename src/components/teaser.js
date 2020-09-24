import React from "react"
import { Link } from "gatsby"
import PostGrid  from "./postGrid"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none
`

const Section = styled.section`
  margin-bottom: ${rhythm(4)}
`

const Teaser = ({ posts, title, linkTo, linkText, postsPerRow=2 }) => {
  return (
    <Section>
      <StyledLink to={linkTo}><h2>{title}</h2></StyledLink>
      <PostGrid posts={posts} postsPerRow={postsPerRow} />
      <Link className="link" to={linkTo}>{linkText}</Link>
    </Section>
  )
}

export default Teaser