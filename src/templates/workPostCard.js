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


const WorkPostCard = (post, data) => {

  return (
    <Card>
      <Link to={post.fields.slug}>
        <h1>
          
        </h1>
        <StyledDiv>
          <h3>{post.frontmatter.title}</h3>
          <StyledSubtitle>{post.frontmatter.oneliner}</StyledSubtitle>
        </StyledDiv>
      </Link>
    </Card>

  )
}

export default WorkPostCard

export const cardQuery = graphql`
  query coverImage($slug: String) {
    allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, relativeDirectory: {regex: $slug}}) {
      nodes {
        name
        id
        extension
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          original {
            src
            height
            width
          }
        }
      }
    }
  }
`