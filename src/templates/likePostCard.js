import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import Img from "gatsby-image"
import Card from "../components/card"

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
    <Card>
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
    </Card>

  )
}

export default LikePostPreview