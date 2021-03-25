import React from "react"
import { useSpring, useTransition, Transition, useChain, animated, config } from 'react-spring'
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import Container from "../components/container"

const CensorWrapper = styled(animated.div)`
  position: absolute;
  display: inline-block;

  img {
    box-sizing: border-box;
    height:480px;
    max-height: 480px;
    width: auto;
    margin: 0;
    border-radius: 3px;
  }
`

const OverlayCanvas = styled.canvas`
  position: absolute; 
  top: 0;
  left: 0; 
  width: 100%;
  transition: opacity 0.11s;  
`

const CensoredImg = (props) => {
  return (
    <CensorWrapper style={props.style}> 
      <img 
        src={props.src} 
        crossOrigin="anonymous" 
        onLoad={e => faceMatcher.detectFacesInImg(e.target)}
      />
      <OverlayCanvas className="faceCanvas" />
      <OverlayCanvas className="boxCanvas" />
    </CensorWrapper>
  )
}

export default CensoredImg;