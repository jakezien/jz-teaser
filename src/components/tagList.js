import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Tag from "./tag"

const StyledDiv = styled.div`
  padding: 2px;
  margin-bottom: ${rhythm(.5)};

  ul {
    margin: 0;

    li {
      display: inline-block;
      margin: 0;
      *:last-child {
        margin-bottom: unset;
      }
    }
  }
`

const TagList = (props) => {
  
  if (!props.children.props || props.children.props.originalType !== 'ul')
    return null;

  const listItems = props.children.props.children;

  return (
    <StyledDiv className={props.className}>
      <ul>
        {listItems.map( (item, index) => {
          return(
            <li key={index}><Tag>{item.props.children}</Tag></li>
          )
        })}
      </ul>
    </StyledDiv>
  )
}

export default TagList