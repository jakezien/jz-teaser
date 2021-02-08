import React from "react"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const StyledDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`

let width = props => 100/props.postsPerRow;
let space = rhythm(.5);
let doubleSpace = rhythm(1);


const StyledPostWrapper = styled.div`
  margin-bottom: ${doubleSpace};
  @media only screen and (min-width:641px) {
    flex-basis: calc(${width}% - ${space});
    min-width:  calc(${width}% - ${space});
    margin-right: ${space};
  }
`

const Grid = ({ posts, postTemplate, postsPerRow }) => {
  return (
    <StyledDiv>
      {posts ? posts.map( ({node}, index ) => {
        return(
          <StyledPostWrapper key={index} postsPerRow={postsPerRow}>
            {postTemplate(node)}
          </StyledPostWrapper>
        )
      }) : ''}
    </StyledDiv>
  )
}

export default Grid