import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { ThemeManagerContext, ThemeSetting } from "gatsby-styled-components-dark-mode"
import GlobalStyle from './globalStyle'

import Header from '../components/header'
import Footer from '../components/footer'


const Layout = ({ location, title, children }) => {

  const themeContext = React.useContext(ThemeManagerContext);
  themeContext.changeThemeSetting == ThemeSetting.SYSTEM;

  return (
    <div>
      <GlobalStyle />
      <Header location={location}/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout