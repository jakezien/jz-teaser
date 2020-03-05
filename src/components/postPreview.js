import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const PostPreview = ({ post, className }) => {
  return (
    <div className={className}>
      <StyledLink to={post.fields.slug}>
        <h2>{post.frontmatter.title}</h2>
        <caption>{post.frontmatter.category}</caption>
        <p>{post.excerpt}</p>
      </StyledLink>
    </div>
  )
}

export default PostPreview