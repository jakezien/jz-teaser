import React from "react"
import PostPreview from "./postPreview"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
`

let width = props => 100/props.postsPerRow;

const StyledPostPreview = styled(PostPreview)`
  flex-basis: calc(${width}% - ${rhythm(.5)});
  margin-right: ${rhythm(0.5)};
  margin-bottom: ${rhythm(1)};
  @media only screen and (min-width:641px) {
    flex-basis: calc(${width}% - ${rhythm(.5)});
    min-width:  calc(${width}% - ${rhythm(.5)});
  }
`

const PostGrid = ({ posts, postsPerRow }) => {
  return (
    <Section>
      {posts.map( ({node}, index ) => {
        return(<StyledPostPreview key={index} post={node} postsPerRow={postsPerRow}/>)
      })}
    </Section>
  )
}

export default PostGrid