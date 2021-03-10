import React, { useEffect, useContext } from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { ThemeContext, withTheme } from "styled-components"
import { useStyledDarkMode, ThemeSetting } from "gatsby-styled-components-dark-mode"
import GlobalStyle from './globalStyle'

import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage, StaticImage, getImage } from "gatsby-plugin-image";
import Gallery from "react-photo-gallery";
import WidthBleeder from "../components/widthBleeder";
import Section from "../components/section";
import Inset from "../components/inset";
import TagList from "../components/tagList";
import { galleryArray, imageByName } from "../utils/functions";


import Header from '../components/header'
import Footer from '../components/footer'


const Layout = withTheme((props) => {


  const { location, title, children, theme } = props
  const { changeThemeSetting, themeSetting } = useStyledDarkMode();

  const shortcodes = { TagList, Section, Link, Inset, GatsbyImage, StaticImage, getImage, Gallery, WidthBleeder, galleryArray, imageByName, rhythm }

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
    <div>
      <MDXProvider components={shortcodes}>
      <GlobalStyle theme={props.theme} />
      <Header location={location}/>
      <main>{children}</main>
      <Footer/>
      </MDXProvider>
    </div>
  )
})

export default Layout