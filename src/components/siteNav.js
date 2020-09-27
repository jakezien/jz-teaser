import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Colors from "../utils/colors"

const StyledUl = styled.ul`
  margin: 0;
  text-align: right;
`

const StyledLi = styled.li`
  display: inline-block;
  list-style: none;
  margin: 0;
`

const StyledLink = styled(Link)`
  margin-left: 2em;
  &:hover {
    left:0;
    right:-4px;
  }
`


const SiteNav = ({className, location}) => {
  return (
    <nav className={className}>
      <StyledUl>
        {/*<pre>{location.pathname}</pre>;*/}
        <StyledLink className="link" to="/work">
          <StyledLi>Work</StyledLi>
        </StyledLink>
        <StyledLink className="link" to="/writing">
          <StyledLi>Writing</StyledLi>
        </StyledLink>
        <StyledLink className="link" to="/things">
          <StyledLi>Things I Like</StyledLi>
        </StyledLink>
        <StyledLink className="link" to="/about">
          <StyledLi>About</StyledLi>
        </StyledLink>
      </StyledUl>
    </nav>
  )
}

export default SiteNav 