import { createGlobalStyle, css } from "styled-components"
import { rhythm, scale } from "../utils/typography"

import { CarouselStyles } from "../styles/carouselStyles"
import { LightboxStyles } from "../styles/lightboxStyles"
import { LinkStyles } from "../styles/linkStyles"
import { SpecificCarouselStyles } from "../styles/specificCarouselStyles"
import { ThemeStyles } from "../styles/themeStyles"
import { TwoUpStyles } from "../styles/twoUpStyles"
import { TypeStyles } from "../styles/typeStyles"

const GlobalStyle = createGlobalStyle`

  ${CarouselStyles}
  ${LightboxStyles}
  ${LinkStyles}
  ${SpecificCarouselStyles}
  ${ThemeStyles}
  ${TwoUpStyles}
  ${TypeStyles}

  ul {
    margin: 0;
    padding-left: .5em;
  }
  @media screen and (min-width: 768px) {
    ul {
      padding-left: 0;
    }
  }

  [class*=card] {
   .gatsby-image-wrapper [data-main-image] {
      border-radius: 6px 6px 0 0;
    }
  }

  [class*=MosaicBg] .gatsby-image-wrapper [data-main-image] {
      border-radius: 0 !important;
  }

  .gatsby-image-wrapper:not(:last-of-type) {
    // margin-bottom: ${rhythm(1)}
  }
`

export default GlobalStyle