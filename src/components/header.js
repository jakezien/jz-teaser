import React from "react"
import SiteNav from './siteNav'
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderEl = styled.header`
  display: flex
`

const StyledSiteNav = styled(SiteNav)`
  margin-left: auto
`

const Header = () => {
  return (
    <HeaderEl>
      <div><Link to="/">Logo</Link></div>
      <StyledSiteNav />
    </HeaderEl>

  )
}

export default Header;