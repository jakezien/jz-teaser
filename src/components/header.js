import React from "react"
import SiteNav from './siteNav'
import styled from "styled-components"
import { Link } from "gatsby"
import Monogram from "../../content/assets/monogram.svg"
import { rhythm } from "../utils/typography"


const HeaderEl = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledSiteNav = styled(SiteNav)`
  margin-left: auto
`

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  height: 54px;
`

const StyledMonogram = styled(Monogram)`
  width: 54px;
  height: 54px
`

const Header = ({location}) => {
  return (
    <HeaderEl>
      <StyledLink to="/">
        <StyledMonogram/>
      </StyledLink>
      <StyledSiteNav location={location}/>
    </HeaderEl>

  )
}

export default Header;