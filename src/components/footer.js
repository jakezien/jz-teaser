import React from "react"
import SiteNav from './siteNav'
import styled from "styled-components"
import { Link } from "gatsby"

const FooterEl = styled.footer`
  display: flex
`

const Footer = () => {
  return (
    <FooterEl>
      <footer>© {new Date().getFullYear()} Jake Zien.</footer>
    </FooterEl>

  )
}

export default Footer;