import React from "react"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 44vh;
  overflow: visible;
  margin-bottom: 2em;
`

const fullBleedImg = ( {fluid} ) => {
  return (
    <StyledDiv>
      <Img 
        fluid={fluid} 
        style={{ 
          position: 'absolute',
          width: '100vw',
          height: '100%',
          left: 'calc((100% - 100vw)/2)'
        }}
      />
    </StyledDiv>
  )
}

export default fullBleedImg