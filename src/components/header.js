import React from "react"
import SiteNav from './siteNav'
import styled from "styled-components"

const HeaderEl = styled.header`
  display: flex
`

const Header = () => {
  return (
    <HeaderEl>
      <div>Logo</div>
      <SiteNav />
    </HeaderEl>

  )
}

export default Header;