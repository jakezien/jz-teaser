import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Category = styled.p`
  opacity: 0.5;
`

const Container = styled.div`
  border-radius: 2px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.15);
  background: white;
`

const TextContainer = styled.div`
  padding: ${rhythm(0.5)};
`

const PostPreview = ({ post, className }) => {
  let coverImage;
  if (post.frontmatter.coverImage) {
    coverImage = post.frontmatter.coverImage.childImageSharp;
  }

  return (
    <Container className={className}>
      <StyledLink to={post.fields.slug}>
        {coverImage ? 
          <Img 
            fluid={{ ...coverImage.fluid, aspectRatio: 1 }} 
            imgStyle={{ objectFit: "contain", padding: post.frontmatter.imagePadding + '%' }}
          /> 
        : ""}
        <TextContainer>
          <h3 style={{marginBottom:0}}>{post.frontmatter.title}</h3>
          <Category>{post.frontmatter.category || post.frontmatter.author || post.frontmatter.artist}</Category>
          <p>{post.excerpt}</p>
        </TextContainer>
      </StyledLink>
    </Container>
  )
}

export default PostPreview