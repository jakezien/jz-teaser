import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Ul = styled.ul`
  display: flex
`

const Li = styled.li`
  list-style: none;
  margin-right: 1em;
`

const SiteNav = () => {
  return (
    <nav>
      <Ul>
        <Li><Link to="/work">Work</Link></Li>
        <Li><Link to="/writing">Writing</Link></Li>
        <Li><Link to="/things">Things I Like</Link></Li>
        <Li><Link to="/about">About</Link></Li>
      </Ul>
    </nav>
  )
}

export default SiteNav 