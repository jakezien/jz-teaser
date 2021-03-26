import React from "react"
import SiteNav from './siteNav'
import styled from "styled-components"
import { Link } from "gatsby"
import Monogram from "../../content/assets/monogram.svg"
import { rhythm } from "../utils/typography"
import Container from "./container"


const StyledHeader = styled.header`
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
    <Container>
      <StyledHeader>
        <StyledLink to="/" aria-label="Homepage">
          <StyledMonogram aria-hidden={true} />
        </StyledLink>
        <StyledSiteNav location={location}/>
      </StyledHeader>
    </Container>

  )
}

export default Header;