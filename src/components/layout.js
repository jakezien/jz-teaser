import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"

import Header from './header'
import Footer from './footer'


const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
