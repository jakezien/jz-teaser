import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Colors from "../utils/colors"

const Ul = styled.ul`
  display: flex
`

const Li = styled.li`
  list-style: none;
  margin: 0;
`

const StyledLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 8px;
  border-radius:4px;
  margin-left: 1.5em;

  :hover, :hover a {
    color: ${Colors.text};
    font-weight: 500;
    background: ${Colors.bg5};
  }

  &[aria-current="page"] {
    color: ${Colors.text};
    font-weight: 500;  
    background: ${Colors.bg1}; 
  }

`


const SiteNav = ({className, location}) => {
  return (
    <nav className={className}>
      <Ul>
        {/*<pre>{location.pathname}</pre>;*/}
        <StyledLink to="/work"><Li>Work</Li></StyledLink>
        <StyledLink to="/writing"><Li>Writing</Li></StyledLink>
        <StyledLink to="/things"><Li>Things I Like</Li></StyledLink>
        <StyledLink to="/about"><Li>About</Li></StyledLink>
      </Ul>
    </nav>
  )
}

export default SiteNav 