import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Card from "../components/card"

const StyledGatsbyImage = styled(GatsbyImage)`
  background: ${props => props.theme.bg1};
  @media only screen and (max-width:413px) {
    display: none;
  }
`

const StyledDiv = styled.div`
  padding: ${rhythm(0.5)};
  @media only screen and (max-width:413px) {
    padding: 0;
    & > p {
      padding: ${rhythm(0.5)};
    }
  }
`

const StyledSubtitle = styled.p`
  color: ${props => props.theme.textTint};
  @media only screen and (max-width:413px) {
    margin-bottom: 0;
  }
`

const MobileWrap = styled.div`
  [class*=StyledGatsbyImage] {
    display: none;
  }

  @media only screen and (max-width:413px) {
    display: flex;
    [class*=StyledGatsbyImage] {
      display: block;
      width: 33vw;
      height: 33vw;
      flex-basis: 33vw;
      margin-right: ${rhythm(0.25)};
    }
  }
`

const FlexDiv = styled.div`
  @media only screen and (max-width:413px) {
    padding: ${rhythm(0.25)};
    flex-shrink: 5;
  }
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
          <MobileWrap>
            <StyledGatsbyImage 
              image={image ? image : ''} 
              alt={post.frontmatter.title}
              imgStyle={{padding:'calc(' + imageMargin + '/2)'}}
            />
            <FlexDiv>
              <h3>{post.frontmatter.title}</h3>
              <StyledSubtitle>{post.frontmatter.category || post.frontmatter.author || post.frontmatter.artist}</StyledSubtitle>
            </FlexDiv>
          </MobileWrap>
          <MDXRenderer>{post.body}</MDXRenderer>
        </StyledDiv>
      </Link>
    </Card>
  );
}

export default FavoritePostCard