import React from "react"
import { rhythm, scale } from "../utils/typography"
import { hPadding, wideMaxWidth, wideHPadding } from "./container"
import styled from "styled-components"

let remToPx
if (typeof(window) != 'undefined')
  remToPx = parseInt(getComputedStyle(document.documentElement).fontSize);

let hPaddingPx = parseFloat(hPadding) * remToPx;
let wideMaxWidthPx = parseFloat(wideMaxWidth) * remToPx;
let wideHPaddingPx = parseFloat(wideHPadding) * remToPx;

let wideHSpacePx = wideMaxWidthPx - (wideHPaddingPx * 2);


const StyledOuterDiv = styled.div`
  position: relative;
  margin-bottom: 2em;
  width: 100vw;
  box-sizing: border-box;
  height: ${props => props.height || 'auto'};
  max-height: ${props => props.maxHeight || 'auto'};
  overflow: hidden;
  
  left: calc(-1 * ${hPaddingPx}px);
  
  @media screen and (min-width: 768px) and (max-width: ${wideMaxWidthPx}px) {
    left: calc(-1 * ${wideHPaddingPx}px) !important; 
  }

  @media screen and (min-width: ${wideMaxWidthPx}px) {
    left: calc( (100vw - ${wideHSpacePx}px) / -2 );
  }
`

const widthBleeder = (props) => {
  const { children, height } = props
  return (
    <StyledOuterDiv height={height}>
      {children}
    </StyledOuterDiv>
  )
}

export default widthBleeder