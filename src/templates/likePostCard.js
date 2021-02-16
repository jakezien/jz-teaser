import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Card from "../components/card"

const StyledDiv = styled.div`
  padding: ${rhythm(0.5)};
`

const StyledSubtitle = styled.p`
  color: ${props => props.theme.textTint}
`

const LikePostCard = (props) => {

  const {post, coverImage} = props;

  let image
  if (coverImage.length) image = getImage(coverImage[0])

  return (
    <Card>
      <Link to={post.fields.slug}>
        <GatsbyImage 
          image={image ? image : ''} 
          alt={post.frontmatter.title}
          style={post.frontmatter.imageMargin ? {margin:post.frontmatter.imageMargin} : {}}
        />
        <StyledDiv>
          <h3>{post.frontmatter.title}</h3>
          <StyledSubtitle>{post.frontmatter.category || post.frontmatter.author || post.frontmatter.artist}</StyledSubtitle>
          <MDXRenderer>{post.body}</MDXRenderer>
        </StyledDiv>
      </Link>
    </Card>
  );
}

export default LikePostCard