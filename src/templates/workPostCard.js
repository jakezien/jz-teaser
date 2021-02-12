import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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


const WorkPostCard = (props) => {

  const {post, coverImage} = props;

  let image
  if (coverImage.length) image = getImage(coverImage[0])

  return (
    <Card>
      <Link to={post.fields.slug}>
        <GatsbyImage image={image ? image : ''} alt={post.frontmatter.oneliner} />
        <StyledDiv>
          <h3>{post.frontmatter.title}</h3>
          <StyledSubtitle>{post.frontmatter.oneliner}</StyledSubtitle>
        </StyledDiv>
      </Link>
    </Card>

  )
}

export default WorkPostCard

