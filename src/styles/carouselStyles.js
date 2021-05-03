import { css } from "styled-components"
import { rhythm, scale } from "../utils/typography"


export const CarouselStyles = css`
.carousel {
  position: relative;
}

.carousel__back-button, .carousel__next-button {
  position: absolute;
  top: 0;
  height: 100%;
  width: ${rhythm(1)};
  border: none;
  background: transparent;
  &[disabled] {
      cursor:default;
}

&:first-of-type{
      left: 0;
}
&:last-of-type{
      right: 0;
}

}

.carousel__slider-tray {
  &.center {
      align-items: center !important;   
}
li {
      margin: 0 .33em;
      &:first-child {
          margin-left: 0;
    }
    &:last-child {
          margin-right: 0;
    }
}
}

.carousel__slider-tray-wrapper {
  padding: 0 ${rhythm(1)}
}

.carousel__dot-group {
  text-align: center;
  button {
      border: none;
      padding: 0;
      background-color: ${props => props.theme.bg4};
      width: 9px;
      height: 9px;
      border-radius: 50%;
      margin: .25em;
      &:hover, &:disabled {
          background-color: ${props => props.theme.yellow};
    }
}
}

.favorites-dot-group button {
    background-color: ${props => props.theme.bg6};
}

@media screen and (min-width: 768px) {
    .carousel__back-button, .carousel__next-button {
        width: ${rhythm(3)}
  }
  .carousel__slider-tray-wrapper {
        padding: 0 ${rhythm(3)}
  }
  .carousel__slider-tray{
        li {
            margin: 0 1em
      }
}
.carousel__dot-group button{
  width: 12px;
  height: 12px;
}
}
`