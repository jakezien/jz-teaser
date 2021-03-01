import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { useSpring, animated } from 'react-spring'
import Tag from "./tag"

const StyledDiv = styled.div`
  padding: 2px;
  position: relative;
`


const StyledUl = styled(animated.ul)`
  margin: 0;
  white-space: nowrap;
  position: absolute;
`

const StyledLi = styled.li`
  display: inline-block;
  margin: 0;
  *:last-child {
    margin-bottom: unset;
`

const SpacerUl = styled.ul`
  margin: 0;
  white-space: nowrap;
  visibility: hidden
`

const chunkArray = (array, chunkSize) => {
  let results = [];
  while (array.length) {
    results.push(array.splice(0, chunkSize));
  }
  return results;
}


const TagRiver = (props) => {

  const springProps = useSpring({
    config: { duration: 90000 },
    from: {transform:'translate3d(0%,0,0)'},
    to: {transform:'translate3d(-50%,0,0)'},
    loop: true
  })

  const reverseSpringProps = useSpring({
    config: { duration: 90000 },
    from: {transform:'translate3d(-50%,0,0)'},
    to: {transform:'translate3d(0%,0,0)'},
    loop: true
  })
  
  if (!props.children.props || props.children.props.originalType !== 'ul')
    return null;

  let listItems = [...props.children.props.children];
  let chunkedItems = chunkArray(listItems, Math.ceil(listItems.length/4));

  return (
    <StyledDiv>
      {chunkedItems.map((list, listIndex) => {return(
        <div key={listIndex}>
        <StyledUl style={listIndex%2 ? reverseSpringProps : springProps}>
          {list.map((item, itemIndex) => {return(
            <StyledLi key={itemIndex}><Tag>{item.props.children}</Tag></StyledLi>
          )})}
          {list.map((item, itemIndex) => {return(
            <StyledLi key={itemIndex}><Tag>{item.props.children}</Tag></StyledLi>
          )})}
        </StyledUl>
        <SpacerUl aria-hidden="true"><StyledLi><Tag>poop</Tag></StyledLi></SpacerUl>
        </div>
      )})}
    </StyledDiv>
  )
}

export default TagRiver