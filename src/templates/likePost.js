import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import Img from "gatsby-image"


const StyledCard = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 3px ${props => props.theme.shadow};
  background: ${props => props.theme.bg0};
  height: 100%;
  overflow: hidden;
  a {
    text-decoration: none;
  }
`

const StyledDiv = styled.div`
  padding: ${rhythm(0.5)};
`

const StyledImagePlaceholder = styled.div`
  width: auto;
  height: ${ rhythm(12) };
  background-color: #eee;
`

const StyledSubtitle = styled.p`
  color: ${props => props.theme.textTint}
`


const LikePostPreview = (post) => {

  return (
    <StyledCard>
      <Link to={post.fields.slug}>
        <div>
          {post.frontmatter.coverImage ? 
            <Img 
              fluid={{ ...post.frontmatter.coverImage.childImageSharp.fluid, aspectRatio: 1 }} 
              imgStyle={{ 
                objectFit: "contain", 
                objectPosition: "top center", 
                minHeight:'100%', 
                padding: post.frontmatter.imagePadding + '%' 
              }}
            /> : <StyledImagePlaceholder />}
        </div>
        <StyledDiv>
          <h3>{post.frontmatter.title}</h3>
          <StyledSubtitle>{post.frontmatter.category || post.frontmatter.author || post.frontmatter.artist}</StyledSubtitle>
          <p>{post.excerpt}</p>
        </StyledDiv>
      </Link>
    </StyledCard>

  )
}

export default LikePostPreview