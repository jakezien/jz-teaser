import React from "react"
import PostPreview from "./postPreview"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

const Section = styled.section`
  display: flex;
`

const StyledPostPreview = styled(PostPreview)`
  flex-basis: calc(25% - ${rhythm(1)});
  margin-right: ${rhythm(1)};
`

const PostGrid = ({ posts }) => {
  return (
    <Section>
      {posts.map( ({node}) => {
        return(<StyledPostPreview post={node}/>)
      })}
    </Section>
  )
}

export default PostGrid