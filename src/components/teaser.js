import React from "react"
import { Link } from "gatsby"
import PostGrid  from "./postGrid"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
  h2 {
    margin-bottom: 1em;
  }
`

const StyledDiv = styled.div`
  margin-bottom: ${rhythm(4)}
`

const Teaser = ({ posts, title, linkTo, linkText, postsPerRow=2 }) => {
  return (
    <StyledDiv>
      <StyledLink to={linkTo}><h2>{title}</h2></StyledLink>
      <PostGrid posts={posts} postsPerRow={postsPerRow} />
      <Link className="link" to={linkTo}>{linkText}</Link>
    </StyledDiv>
  )
}

export default Teaser