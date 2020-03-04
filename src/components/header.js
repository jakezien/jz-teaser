import React from "react"
import SiteNav from './siteNav'
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderEl = styled.header`
  display: flex
`

const Header = () => {
  return (
    <HeaderEl>
      <div><Link to="/">Logo</Link></div>
      <SiteNav />
    </HeaderEl>

  )
}

export default Header;