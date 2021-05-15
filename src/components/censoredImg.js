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
    height:auto;
    width: 100%;
    margin: 0;
    border-radius: 3px;
    object-fit: contain;
  }
`

const OverlayCanvas = styled.canvas`
  position: absolute; 
  top: 50%;
  left: 0; 
  width: 100%;
  transform: translateY(-50%);
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