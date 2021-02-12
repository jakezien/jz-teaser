import React from "react"
import styled from "styled-components"

const StyledDiv = styled.div`
  border-radius: 5px;
  box-shadow: 0 2px 3px ${props => props.theme.shadow};
  background: ${props => props.theme.bg0};
  height: 100%;
  overflow: hidden;
  a {
    text-decoration: none;
  }
`

const Card = ({children}) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}

export default Card;