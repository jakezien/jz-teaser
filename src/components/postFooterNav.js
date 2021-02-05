import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Container from "./container"
import Colors from "../utils/colors"

const StyledNav = styled.nav`
  margin-bottom: 1em;
`

const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 0;

  li {
    list-style: none;
  }
`


const PostFooterNav = ({pageContext}) => {

  const { previous, next } = pageContext

  return (

    <StyledNav>
      <hr/>
      <StyledUl>
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </StyledUl>
    </StyledNav>
  )
}

export default PostFooterNav;