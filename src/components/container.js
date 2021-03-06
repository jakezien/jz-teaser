import React from "react"
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"

export const hPadding = rhythm(.75); 
export const wideMaxWidth = rhythm(40); 
export const wideHPadding = rhythm(3);
export const remToPx = 20; // BAD BAD BAD MAGIC NUMBER

const StyledDiv = styled.div`
  padding: ${hPadding};
  margin: 0 auto;
  overflow: visible;
  @media screen and (min-width: 768px) {
    max-width: ${wideMaxWidth};
    padding: ${rhythm(1)} ${wideHPadding} ${rhythm(1.5)} ${wideHPadding};
  }
`

const Container = (props) => {
  return (
    <StyledDiv {...props}>
      {props.children}
    </StyledDiv>
  )
}

export default Container;