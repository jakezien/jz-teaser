import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx"

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


const LikePostCard = (props) => {
  const {post} = props;

  return (
    <Card>
      <Link to={post.fields.slug}>
        <div>
          {post.frontmatter.coverImage ? 
            <GatsbyImage
              alt={post.frontmatter.title}
              image={{ ...post.frontmatter.coverImage.childImageSharp.gatsbyImageData, aspectRatio: 1 }}
              imgStyle={{ 
                objectFit: "contain", 
                objectPosition: "top center", 
                minHeight:'100%', 
                padding: post.frontmatter.imagePadding + '%' 
              }} /> : <StyledImagePlaceholder />}
        </div>
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