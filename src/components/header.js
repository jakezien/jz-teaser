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

const StyledLink = styled(Link)`
  text-decoration: none
`

const Header = () => {
  return (
    <HeaderEl>
      <div><StyledLink to="/">Home</StyledLink></div>
      <StyledSiteNav />
    </HeaderEl>

  )
}

export default Header;