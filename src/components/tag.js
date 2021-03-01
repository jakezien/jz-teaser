import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const StyledSpan = styled.span`
  background: ${props => props.theme.bg5};
  border: 1px solid ${props => props.theme.bg7};
  box-shadow: ${props => props.theme.isDark ? '0 1px 0 rgba(0,0,0,.66), inset 0 1px 0 rgba(255,255,255, .2)' : '0 1px 0 rgba(0,0,0,.1), inset 0 1px 0 rgba(255,255,255, .66)'}; 
  text-shadow: ${props => props.theme.isDark ? '0 -1px 0 rgba(0,0,0,.66);' : '0 1px 0 rgba(255,255,255,.66)'};
  padding: ${rhythm(.2)} ${rhythm(.5)};
  margin: ${rhythm(.15)} ${rhythm(.1)};
  margin-bottom: ${rhythm(.15)} !important;
  border-radius: ${rhythm(1)};
  font-family: Pantograph;
  letter-spacing: 0.01em;
  font-weight: 400;
  font-size: ${rhythm(.85)};
  color: ${props => props.theme.isDark ? props.theme.text : props.theme.textTint};
  display: inline-block;
`

const Tag = (props) => {
  return (
    <StyledSpan>{props.children}</StyledSpan>
  )
}

export default Tag