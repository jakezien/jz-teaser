import React from "react"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import styled from "styled-components"

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
  margin-left: ${rhythm(.5)};

  &[aria-current=page] {
    color: ${props => props.theme.isDark ? props.theme.textTint : props.theme.textShade};
  }
  
  @media only screen and (min-width:26rem) {
    margin-left: ${rhythm(1)};
  }
`

const StyledBr = styled.br`
  @media only screen and (min-width:19rem) {
    display: none;
  }
`


const SiteNav = ({className, location}) => {
  return (
    <nav className={className}>
      <StyledUl>
        {/*<pre>{location.pathname}</pre>;*/}
        
        <StyledLi>
          <StyledLink className="link" to="/work">
            Work
          </StyledLink>
        </StyledLi>
        
        <StyledLi>
          <StyledLink className="link" to="/writing">
            Writing
          </StyledLink>
        </StyledLi>
        <StyledBr/>
        
        <StyledLi>
          <StyledLink className="link" to="/favorites">
            Favorites
          </StyledLink>
        </StyledLi>
        
        <StyledLi>
          <StyledLink className="link" to="/about">
            About
          </StyledLink>
        </StyledLi>
        
      </StyledUl>
    </nav>
  )
}

export default SiteNav 