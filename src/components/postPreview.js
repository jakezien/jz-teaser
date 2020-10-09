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
  border-radius: 5px;
  box-shadow: 0 2px 3px rgba(0,0,0,0.075);
  background: #fdfdfd;
  overflow: hidden;
  &.things {
    > a {
      display: flex;
    }
    .imageContainer {
      width: 33%;
    }
    .textContainer {
      width: 66%;
    }
  }
`

const TextContainer = styled.div`
  padding: ${rhythm(0.5)};
`

const ImageContainer = styled.div``

const ImagePlaceholder = styled.div`
  width: auto;
  height: ${ rhythm(12) };
  background-color: #eee;
`


const PostPreview = ({ post, className, aspectRatio = 1.5 }) => {
  let coverImage, postType;
  
  if (post.frontmatter.coverImage) {
    coverImage = post.frontmatter.coverImage.childImageSharp;
  }
  if (post.frontmatter.postType) {
    postType = post.frontmatter.postType;
    if (postType === "THING") {
      aspectRatio = 1;
      className += " thing"
    }
  }

  return (
    <Container className={className}>
      <StyledLink to={post.fields.slug}>
        <ImageContainer className="imageContainer">
          {coverImage ? 
            <Img 
              fluid={{ ...coverImage.fluid, aspectRatio: aspectRatio }} 
              imgStyle={{ 
                objectFit: "contain", 
                objectPosition: "top center", 
                minHeight:'100%', 
                padding: post.frontmatter.imagePadding + '%' 
              }}
            /> 
          : <ImagePlaceholder />}
        </ImageContainer>
        <TextContainer className="textContainer">
          <h3 style={{marginBottom:0}}>{post.frontmatter.title}</h3>
          <Category className="inputFont">{post.frontmatter.category || post.frontmatter.author || post.frontmatter.artist}</Category>
          <p>{post.excerpt}</p>
        </TextContainer>
      </StyledLink>
    </Container>
  )
}

export default PostPreview