import React from "react"
import SiteNav from './siteNav'
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const StyledFooter = styled.footer`
  display: flex;
  background: #444;
  color: #aaa;
  min-height: ${ rhythm(12) };
  position: relative;
  z-index: 0;
`

const Footer = () => {
  return (
    <StyledFooter>
      <h3>© {new Date().getFullYear()} Jake Zien.</h3>
    </StyledFooter>

  )
}

export default Footer;