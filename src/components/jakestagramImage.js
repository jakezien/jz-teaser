import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"

const StyledGatsbyImage = styled(GatsbyImage)`
  cursor: pointer;
  .grid & {  
    flex: 1 0 0%;
    margin-right:3px;
    > div:first-child {
      padding-top: 100% !important;
    }
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    @media (min-width: 768px) {
      margin-right: 28px;
    }
  }

  .list & { 
    flex: 1 0 100%;
    margin-bottom:${rhythm(1)}
  }
`

const StyledDiv = styled.div`

`

const JakestagramImage = (props) => {
  return (
    <StyledDiv>
      <StyledGatsbyImage {...props}/>
    </StyledDiv>
  )
}

export default JakestagramImage;