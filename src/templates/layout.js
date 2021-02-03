import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"

import Header from '../components/header'
import Footer from '../components/footer'

export const Container = styled.div`
  max-width: ${rhythm(44)};
  padding: ${rhythm(1)} ${rhythm(1)} ${rhythm(2)} ${rhythm(1)};
  margin: 0 auto;
  overflow: visible;
`

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Container>
        <Header location={location}/>
        <main>{children}</main>
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
