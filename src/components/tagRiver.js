import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Tag from "./tag"

const StyledDiv = styled.div`
  padding: 2px;

  ul {
    margin: 0;
    white-space: nowrap;

    li {
      display: inline-block;
      margin: 0;
      *:last-child {
        margin-bottom: unset;
      }
    }
  }
`

const chunkArray = (array, chunkSize) => {
  let results = [];
  
  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }
  
  return results;
}


const TagRiver = (props) => {
  
  if (!props.children.props || props.children.props.originalType !== 'ul')
    return null;

  let listItems = [...props.children.props.children];
  let chunkedItems = chunkArray(listItems, Math.ceil(listItems.length/4));
  console.log(chunkedItems)

  return (
    <StyledDiv>
      {chunkedItems.map((list, listIndex) => {return(
        <ul key={listIndex}>
          {list.map((item, itemIndex) => {return(
            <li key={itemIndex}><Tag>{item.props.children}</Tag></li>
          )})}
        </ul>
      )})}
    </StyledDiv>
  )
}

export default TagRiver