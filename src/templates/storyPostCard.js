import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "../components/card"
import { MDXRenderer } from "gatsby-plugin-mdx"


const StyledDiv = styled.div`
  padding: ${rhythm(0.5)};
`

const StyledCard = styled(Card)`
  flex-shrink: 0;
  max-width: ${rhythm(16)};


  &:not(last-of-type) {
    margin-right: ${rhythm(1.5)}
  }
`

const StoryPostCard = (props) => {

  const {post, coverImage} = props;

  return (
    <StyledCard>
      <GatsbyImage style={{marginBottom:0}} image={coverImage && getImage(coverImage[0])} alt="" />
      <StyledDiv>
        <h3 style={{marginTop:rhythm(.25)}}>{post.frontmatter.title}</h3>
        <p className="bigText">{post.frontmatter.subtitle}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </StyledDiv>
    </StyledCard>
  )
}

export default StoryPostCard

