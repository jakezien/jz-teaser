import React, {useRef} from "react"
import SiteNav from './siteNav'
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Header from "./header"
import Container from "./container"
import SpotifyPlayer from "./SpotifyPlayer"

const StyledFooter = styled.footer`
  min-height: ${ rhythm(7) };
  position: relative;
  z-index: 0;
  background: ${props => props.theme.yellow};
`
const StyledDiv = styled.div`
  display: flex;
  position: relative;
  margin: 0;
  align-items: baseline;
  justify-content: space-between;
  p {
    display: inline-block;
    margin: 0;
    &:first-child {
      left: -8px;
    }
  }
`

const Footer = () => {
  const emailRef = useRef();

  return (
    <StyledFooter className="yellowBg">
      <Header monogramBg="hsl(46, 100%, 70%)" showHome='1'/>
      <Container style={{paddingBottom:0}}>
        {/*<SpotifyPlayer />*/}
        <StyledDiv> 
          <p className="link" ref={emailRef}>Email me</p>
          <p className="linkish">© {new Date().getFullYear()} Jake Zien.</p>
        </StyledDiv>
      </Container>
    </StyledFooter>
  )
}

export default Footer;