import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const StyledOuterSpan = styled.span`
  position: relative;
  display: inline-block;
  cursor: pointer;

  :hover {
    .jz-tooltip {
      display: inline-block;
      z-index: 2;
      opacity: 1;
    }
    .jz-tooltip-trigger{
      border-bottom-color: transparent;
      &:before {
        opacity: 1;
      }
      &:after {
        opacity: 0;
      }
    }
  }
`

const StyledSpan = styled.span`
  display: inline-block;
  padding-bottom: 0;
  margin-top: initial;
  margin-bottom: 0.5rem;
  position: relative;

  :before {
    border-radius: 4px;
    position: absolute;
    padding: 8px;
    top: -8px;
    left: -8px;
    width: calc(100% + 16px);
    height: calc(100% + 16px);
    content: '';
    background-color: ${props => props.theme.isDark ? props.theme.bg4 : props.theme.yellow};
    opacity: 0;
    z-index: -1;
    transition: opacity 0.1s;
  }

  :after {
    content: '';
    position: absolute;
    width: 100%;
    height: 5px;
    background-color: ${props => props.theme.yellow};
    bottom: -5px;
    border-radius: 3px;
    left: 0;
    transition: opacity 0.1s;
  }
  @media only screen and (min-width:26rem) {
    :after {
      bottom: -3px;
    }
  }

`

const StyledPopup = styled.div`
  position: absolute;
  top: 2%;
  left: 95%;
  display: none;
  opacity: 0;
  z-index: 0;
  min-width: ${rhythm(7)};
  padding: ${rhythm(0.5)};
  padding-bottom: ${rhythm(1)};
  background-color: ${props => props.theme.isDark ? props.theme.yellow : props.theme.bg3};
  color: ${props => props.theme.isDark ? props.theme.textOnYellow : props.theme.text};
  box-shadow: -4px 4px 0px rgba(0,0,0,0.15);
  font-weight: 300;
  font-family: 'covik-sans';
  transform: rotate(-1.5deg);
  i {
    letter-spacing: 0.05em;
    font-style: normal;
    font-weight: 300;
    text-transform: lowercase;
    font-feature-settings: 'smcp';
  }
`

const Tooltip = ({children, text}) => {
  
  return (
    <StyledOuterSpan>
      <StyledSpan as='h1' className="jz-tooltip-trigger">
        {text}
      </StyledSpan>
      <StyledPopup className="jz-tooltip">
        {children}
      </StyledPopup>
    </StyledOuterSpan>
  )
}

export default Tooltip;