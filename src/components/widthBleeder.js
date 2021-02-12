import React from "react"
import { rhythm, scale } from "../utils/typography"
import { hPadding, wideMaxWidth, wideHPadding } from "./container"
import styled from "styled-components"

let wideHSpace = parseFloat(wideMaxWidth) - (parseFloat(wideHPadding) * 2) + 'rem'

const StyledOuterDiv = styled.div`
  position: relative;
  margin-bottom: 2em;
  width: 100vw;
  height: ${props => props.height || 'auto'};
  overflow: hidden;
  
  left: calc(-1 * ${hPadding});
  
  @media screen and (min-width: 768px) and (max-width: ${wideMaxWidth}) {
    left: calc(-1 * ${wideHPadding}); 
  }

  @media screen and (min-width: ${wideMaxWidth}) {
    left: calc( (100vw - ${wideHSpace}) / -2 );
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