import React from "react"
import SiteNav from './siteNav'
import styled from "styled-components"
import { Link } from "gatsby"
import Monogram from "../../content/assets/monogram.svg"


const HeaderEl = styled.header`
  display: flex
`

const StyledSiteNav = styled(SiteNav)`
  margin-left: auto
`

const StyledLink = styled(Link)`
  text-decoration: none
`

const StyledMonogram = styled(Monogram)`
  width: 54px
`

const Header = () => {
  return (
    <HeaderEl>
      <div>
        <StyledLink to="/">
          <StyledMonogram/>
        </StyledLink>
      </div>
      <StyledSiteNav/>
    </HeaderEl>

  )
}

export default Header;