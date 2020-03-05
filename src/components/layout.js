import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

import Header from './header'
import Footer from './footer'

const Container = styled.div`
  max-width: ${rhythm(30)};
  padding: ${rhythm(1)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
  margin: 0 auto;
`

const Layout = ({ location, title, children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
}

export default Layout
