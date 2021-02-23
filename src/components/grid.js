import React from "react"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

let width = props => 100/props.postsPerRow;
let doubleWidth = props => 200/props.postsPerRow;
let space = rhythm(.5);
let doubleSpace = rhythm(1);


const StyledPostWrapper = styled.div`
  margin-bottom: ${doubleSpace};
  min-width: 100%;
  @media only screen and (min-width:414px) and (max-width:640px) {
    flex-basis: calc(${doubleWidth}% - ${space});
    min-width:  calc(${doubleWidth}% - ${space});
    margin-right: ${space};
  }
  @media only screen and (min-width:641px) {
    flex-basis: calc(${width}% - ${space});
    min-width:  calc(${width}% - ${space});
    margin-right: ${space};
  }
`

const Grid = (props) => {
  const { posts, postCoverImages, postTemplate, postsPerRow } = props;
  const PostTemplate = props.postTemplate

  return (
    <StyledDiv>
      {posts && posts.map( ({node}, index ) => {

        let coverImage
        if (typeof postCoverImages != 'undefined') {
          coverImage = postCoverImages.filter(imgNode => {
            return node.fields.slug.includes(imgNode.relativeDirectory) || node.fields.slug.includes(imgNode.name)
          })
        }

        return(
          <StyledPostWrapper key={index} postsPerRow={postsPerRow}>
            <PostTemplate post={node} coverImage={coverImage ? coverImage : ''} />
          </StyledPostWrapper>
        )
      })}
    </StyledDiv>
  )
}

export default Grid