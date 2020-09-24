import React from "react"
import PostPreview from "./postPreview"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
`

let width = props => 100/props.postsPerRow;
let space = rhythm(1);
let doubleSpace = rhythm(1.5);
const StyledPostPreview = styled(PostPreview)`
  margin-bottom: ${doubleSpace};
  @media only screen and (min-width:641px) {
    flex-basis: calc(${width}% - ${space});
    min-width:  calc(${width}% - ${space});
    margin-right: ${space};
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