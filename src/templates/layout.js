import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

import Header from '../components/header'
import Footer from '../components/footer'

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header location={location}/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}

export default Layout