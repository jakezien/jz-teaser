import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import { withTheme } from "styled-components"
import { ThemeManagerContext, ThemeSetting } from "gatsby-styled-components-dark-mode"
import GlobalStyle from './globalStyle'

import Header from '../components/header'
import Footer from '../components/footer'


const Layout = withTheme((props) => {

  const { location, title, children, theme } = props
  const themeContext = useContext(ThemeManagerContext);

  function setThemeToSystemTheme(e) {
    // let newTheme = e ? ThemeSetting.DARK : ThemeSetting.LIGHT;
    themeContext.changeThemeSetting(ThemeSetting.SYSTEM);
    // console.log('setting theme to ', newTheme)
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;

    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', setThemeToSystemTheme);
    
    // Specify how to clean up after this effect:
    return function cleanup() {
      mediaQuery.removeEventListener('change', setThemeToSystemTheme)
    };
  });

  console.log('layout loaded')

  return (
    <div>
      <GlobalStyle theme={props.theme} />
      <Header location={location}/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
})

export default Layout