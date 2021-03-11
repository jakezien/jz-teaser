import React from "react"
import SiteNav from './siteNav'
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Container from "./container"
import SpotifyPlayer from "./SpotifyPlayer"

const StyledFooter = styled.footer`
  min-height: ${ rhythm(8) };
  position: relative;
  z-index: 0;
  background: ${props => props.theme.yellow};
`

const Footer = () => {
  return (
    <StyledFooter className="yellowBg">
      <Container>
        <h3>© {new Date().getFullYear()} Jake Zien.</h3>
        {/*<SpotifyPlayer />*/}
      </Container>
    </StyledFooter>
  )
}

export default Footer;