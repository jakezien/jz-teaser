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

const StyledGatsbyImage = styled(GatsbyImage)`
  margin-bottom: ${rhythm(.5)} !important;

  @media only screen and (max-width:413px) {
    margin-bottom: 0 !important;
    display: none;
  }
`


const StoryPostCard = (props) => {

  const {post, coverImage} = props;

  return (
    <Card>
      <StyledGatsbyImage 
        image={coverImage && getImage(coverImage[0])}
        alt=""
        imgStyle={post.frontmatter.imageMargin && {padding:'calc(' + post.frontmatter.imageMargin + '/2)'}}
        objectFit='contain'
        style={{marginBottom:0}}
      />
      <StyledDiv>
        <h3 style={{marginTop:rhythm(.25)}}>{post.frontmatter.title}</h3>
        <p className="bigText">{post.frontmatter.subtitle}</p>
        <MDXRenderer>{post.body}</MDXRenderer>
      </StyledDiv>
    </Card>
  )
}

export default StoryPostCard

