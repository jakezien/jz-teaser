import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Card from "../components/card"

const StyledDiv = styled.div`
  padding: ${rhythm(0.5)};
`

const StyledCard = styled(Card)``

const StyledSubtitle = styled.p`
  color: ${props => props.theme.textTint};
  transition: color 0.12s;
`

const StyledLink = styled(Link)`
  box-sizing: border-box;
  text-decoration: none;

  &:focus {
    border: 3px solid ${props => props.theme.yellow};
  }

  ${StyledCard} {
    background: ${props => props.theme.offWhite};

    .gatsby-image-wrapper picture {

      :after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${props => props.theme.yellow};
        opacity: 0;
        mix-blend-mode: hard-light;
        transition: opacity 0.1s;
      }
    }
  }

  &:hover {
    ${StyledCard} {
      background: white;
      box-shadow: 0 3px 4px ${props => props.theme.shadow};
      transform: translateY(-1px);

      .headerLink {
        background: ${props => props.theme.bg4};
        border: 4px solid ${props => props.theme.bg4};
        border-radius: 4px;
      }

      .gatsby-image-wrapper picture {
        :after {
          opacity: 1;
        }
      }

      ${StyledSubtitle} {
        color: ${props => props.theme.linkHover};
      }
    }  
  }
`


const WorkPostCard = (props) => {

  const {post, coverImage} = props;

  let image
  if (coverImage.length) image = getImage(coverImage[0])

  return (
      <StyledLink to={post.fields.slug}>
        <StyledCard>
          <GatsbyImage image={image ? image : ''} alt={post.frontmatter.oneliner} />
          <StyledDiv>
              <h3 className="headerLink">{post.frontmatter.title}</h3>
            <StyledSubtitle>{post.frontmatter.oneliner} &rarr;</StyledSubtitle>
          </StyledDiv>
        </StyledCard>
      </StyledLink>

  )
}

export default WorkPostCard

