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

const StyledGatsbyImage = styled(GatsbyImage)`
  background: ${props => props.theme.bg1}
`

const FavoritePostCard = (props) => {

  const {post, coverImage} = props;

  let image
  if (coverImage.length) image = getImage(coverImage[0])
  let imageMargin = 0;
  if (post.frontmatter.imageMargin) imageMargin = post.frontmatter.imageMargin;

  return (
    <Card>
      <Link to={post.fields.slug}>
        <StyledGatsbyImage 
          image={image ? image : ''} 
          alt={post.frontmatter.title}
          imgStyle={{padding:imageMargin}}
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

export default FavoritePostCard