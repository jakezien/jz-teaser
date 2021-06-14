import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { ThemeProvider, ThemeContext, withTheme } from "styled-components"
import { useStyledDarkMode, ThemeSetting } from "gatsby-styled-components-dark-mode"
import GlobalStyle from '../styles/globalStyle'

import Section from "../components/section";

import Analytics from '../components/analytics'

const LayoutMinimal = withTheme((props) => {

  const { location, title, children, theme } = props
  const { changeThemeSetting, themeSetting } = useStyledDarkMode();

  function setThemeToSystemTheme(e) {
    // let newTheme = e ? ThemeSetting.DARK : ThemeSetting.LIGHT;
    changeThemeSetting(ThemeSetting.SYSTEM);
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

  return (
    <>
      <Analytics/>
        <GlobalStyle theme={props.theme} />
        <main>
          {children}
        </main>
    </>
  )
})

export default LayoutMinimal