import { css } from "styled-components"
import { rhythm, scale } from "../utils/typography"

export const SpecificCarouselStyles = css`
.carousel-tray-favorites {
  li {
    margin: 0 .5em;
    [class*=card] {
      height: auto;
      padding-bottom: 1em;
    }
  }
}

@media screen and (max-width: 479px) {
  .carousel-tray-story {
    width: 900% !important
  }
  .carousel-tray-favorites {
    width: 1400% !important
  }
}

@media screen and (min-width: 480px) and (max-width: 1023px) {
  .carousel-tray-story{
    width: 720% !important
  }
  .carousel-tray-favorites {
  }
}

@media screen and (min-width: 1024px) {
  .carousel-tray-story{
    width: 450% !important
  }
  .carousel-tray-favorites {
  }
}

@media screen and (min-width: 1280px) {
  .carousel-tray-story{
    width: 375% !important
  }
  .carousel-tray-favorites {
  }
}

@media screen and (min-width: 1600px) {
  .carousel-tray-story{
    width: 300% !important
  }
  .carousel-tray-favorites {
  }
}

@media screen and (min-width: 1920px) {
  .carousel-tray-story{
    width: 200% !important
  }
  .carousel-tray-favorites {
  }
}

@media screen and (max-width: 639px) {
  .carousel-tray-do {
    width: 300% !important
  }
}

@media screen and (min-width: 640px) and (max-width: 1079px) {
  .carousel-tray-do {
    width: 150% !important;
  }
}

@media screen and (min-width: 1080px) {
  .carousel.do {
    max-width 1080px !important;
    margin: 0 auto;
    user-select: none;
    .carousel-tray-do {
      width: 100% !important;
    }
    .carousel__dot-group {
      display: none;
    }
    .carousel__back-button, .carousel__next-button {
      display: none;
    }
  }
}
`