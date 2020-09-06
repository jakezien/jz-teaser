import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Ul = styled.ul`
  display: flex
`

const Li = styled.li`
  list-style: none;
  margin-left: 2em;
`

const StyledLink = styled(Link)`
  text-decoration: none
`


const SiteNav = ({className}) => {
  return (
    <nav className={className}>
      <Ul>
        <Li><StyledLink to="/work">Work</StyledLink></Li>
        <Li><StyledLink to="/writing">Writing</StyledLink></Li>
        <Li><StyledLink to="/things">Things I Like</StyledLink></Li>
        <Li><StyledLink to="/about">About</StyledLink></Li>
      </Ul>
    </nav>
  )
}

export default SiteNav 