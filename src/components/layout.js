import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

import Header from './header'
import Footer from './footer'

export const Container = styled.div`
  max-width: ${rhythm(40)};
  padding: ${rhythm(1)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
  margin: 0 auto;
  overflow: visible;
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
