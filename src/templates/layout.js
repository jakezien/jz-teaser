import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { createGlobalStyle } from "styled-components"
import { ThemeManagerContext, ThemeSetting } from "gatsby-styled-components-dark-mode"

import Header from '../components/header'
import Footer from '../components/footer'

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme.text)}
  }
`

const StyledDiv = styled.div`
  background-color: ${props => props.theme.bg0};
`

const Layout = ({ location, title, children }) => {

  const themeContext = React.useContext(ThemeManagerContext);
  themeContext.changeThemeSetting == ThemeSetting.SYSTEM;

  return (
    <StyledDiv>
      <GlobalStyle />
      <Header location={location}/>
      <main>{children}</main>
      <Footer/>
    </StyledDiv>
  )
}

export default Layout