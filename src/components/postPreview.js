import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Category = styled.p`
  opacity: 0.5;
`

const Container = styled.div`
  padding: ${rhythm(0.5)};
  border-radius: 2px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.15);
`

const PostPreview = ({ post, className }) => {
  return (
    <Container className={className}>
      <StyledLink to={post.fields.slug}>
        <h3 style={{marginBottom:0}}>{post.frontmatter.title}</h3>
        <Category>{post.frontmatter.category}</Category>
        <p>{post.excerpt}</p>
      </StyledLink>
    </Container>
  )
}

export default PostPreview