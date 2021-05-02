import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Card from "../components/card"

const StyledGatsbyImage = styled(GatsbyImage)`
  background: ${props => props.theme.bg1};
`

const StyledDiv = styled.div`
  padding: ${rhythm(0.5)};
`

const StyledTitle = styled.h3`
  margin-top: 0;
`

const MobileWrap = styled.div`
  [class*=StyledGatsbyImage] {
    display: none;
  }


`

const FlexDiv = styled.div`

`

const FavoritePostCard = (props) => {

  const {post, coverImage} = props;

  return (
    <Card>
        <StyledGatsbyImage 
          image={coverImage && getImage(coverImage[0])}
          alt=""
          imgStyle={post.frontmatter.imageMargin && {padding:'calc(' + post.frontmatter.imageMargin + '/2)'}}
        />
        <StyledDiv>
            <StyledTitle>{post.frontmatter.title}</StyledTitle>
            <p className="bigText">{post.frontmatter.subtitle}</p>
            <MDXRenderer>{post.body}</MDXRenderer>
        </StyledDiv>
    </Card>
  );
}

export default FavoritePostCard