import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"


const Tooltip = ({children, text}) => {

  const StyledOuterSpan = styled.span`
    position: relative;
    display: inline-block;

    :hover .jz-tooltip {
      display: inline-block;
      z-index: 2;
      opacity: 1;
    }
  `

  const StyledSpan = styled.span`
    display: inline-block;
    border-bottom: 4px solid gold;
    padding-bottom: 0;
    cursor: pointer;
  `

  const StyledPopup = styled.div`
    display: none;
    opacity: 0;
    z-index: 0;
    position: absolute;
    top: -25%;
    left: 100%;
    width: ${rhythm(10)};
    padding: ${rhythm(0.5)};
    background-color: rgb(255, 234, 182);
  `
  
  return (
    <StyledOuterSpan>
      <StyledSpan as='h2'>
        {text}
      </StyledSpan>
      <StyledPopup className="jz-tooltip">
        {children}
      </StyledPopup>
    </StyledOuterSpan>
  )
}

export default Tooltip;