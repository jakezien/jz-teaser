import { createGlobalStyle } from "styled-components"
import { rhythm, scale } from "../utils/typography"


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg0};
    color: ${props => (props.theme.text)};
  }

  p a:not(.link) {
    text-decoration: none;
    position: relative;
    transition: color 0.1s;

    :hover {
      color: ${props => props.theme.linkHover};
      &:after {
        background-color: ${props => props.theme.linkHover};
      }
    }

    :after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      border-radius: 2px;
      opacity: 0.4;
      background-color: ${props => props.theme.text};
      transition: background-color 0.1s;

    }

  }

  p.limit-width {
      max-width: ${rhythm(18.5)};
 }

  .headerLink {
    border: 4px solid transparent;
    position: relative;
    padding: 0;
    transition: color 0.1s, border 0.1s, background 0.1s;
    display: inline-block;
    left: -2px;
    
    :before {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: -4px;
      left: 0;
      border-radius: 2px;
      background-color: ${props => props.theme.bg4};
    }

    :hover, &[aria-current=page] {
      background: ${props => props.theme.bg4};
      border: 4px solid ${props => props.theme.bg4};
      border-radius: 4px;
    }    
  }

  .linkish {
    font-family: "Pantograph", 'ui-monospace', 'Menlo', 'Monaco', "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro","Fira Mono", "Droid Sans Mono", "Courier New", 'monospace';
    letter-spacing: 0.02em;
    font-size: ${rhythm(.85)};
    font-weight: 400;
    color: ${props => props.theme.text};
  }

  .link {
    font-family: "Pantograph", 'ui-monospace', 'Menlo', 'Monaco', "Cascadia Mono", "Segoe UI Mono", "Roboto Mono", "Oxygen Mono", "Ubuntu Monospace", "Source Code Pro","Fira Mono", "Droid Sans Mono", "Courier New", 'monospace';
    text-decoration: none;
    letter-spacing: 0.02em;
    font-size: ${rhythm(.85)};
    font-weight: 400;
    color: ${props => props.theme.text};
    border: 4px solid transparent;
    position: relative;
    padding: 0 2px;
    transition: color 0.1s, border 0.1s, background 0.1s;
    cursor: pointer;
    
    :after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      bottom: -2px;
      left: 0;
      border-radius: 2px;
      background-color: ${props => props.theme.bg4};
    }

    :hover, &[aria-current=page] {
      background: ${props => props.theme.bg4};
      border: 4px solid ${props => props.theme.bg4};
      border-radius: 4px;
    }
  }

  footer {
    .link, .linkish {
      color: ${props => props.theme.textOnYellow} !important;
    }

    .link {
      :after {
        background-color: hsl(46, 100%, 84%);
      }

      :hover {
        background: hsl(46, 100%, 84%);
        border: 4px solid hsl(46, 100%, 84%);
      }

      &[aria-current=page] {
        background: unset;
        color: unset;
        border-color: transparent;
        &:hover {
          background: hsl(46, 100%, 84%);
          border: 4px solid hsl(46, 100%, 84%);
        }
      }
    }
  }

  .bigtext a:after {
    bottom: 2px;
  }

  ul {
    margin: 0;
    padding-left: .5em;
  }
  @media screen and (min-width: 768px) {
    ul {
      padding-left: 0;
    }
  }

 .shadow {
    filter: drop-shadow(0 1px 5px rgba(0,0,0,0.1));
 }

  .yellowBg {
    color: ${props => props.theme.textOnYellow}
  }

  .bg1 {
    background-color: ${props => props.theme.bg1}
  }

  .bg2 {
    background-color: ${props => props.theme.bg2}
  }

  .bg3 {
    background-color: ${props => props.theme.bg3}
  }

  .bg4 {
    background-color: ${props => props.theme.bg4}
  }

  .bg5 {
    background-color: ${props => props.theme.bg5}
  }

  .bg6 {
    background-color: ${props => props.theme.bg6}
  }

  .bg7 {
    background-color: ${props => props.theme.bg7}
  }

  .bg8 {
    background-color: ${props => props.theme.bg8}
  }



  figure .react-photo-gallery--gallery {
    margin-bottom: 0
  }

  .react-photo-gallery--gallery {
    margin-bottom: ${rhythm(1)}
  }

  [class*=widthBleeder] .react-photo-gallery--gallery {
    margin-bottom: 0
  }

  [class*=card] .gatsby-image-wrapper picture {
    border-radius: 6px 6px 0 0;
  }

  .gatsby-image-wrapper:not(:last-of-type) {
    margin-bottom: ${rhythm(1)}
  }

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
  .carousel-tray-story, .carousel-tray-favorites {
      width: 720% !important
  }
}

@media screen and (min-width: 1024px) {
  .carousel-tray-story, .carousel-tray-favorites {
      width: 450% !important
  }
}

@media screen and (min-width: 1280px) {
  .carousel-tray-story, .carousel-tray-favorites {
      width: 375% !important
  }
}

@media screen and (min-width: 1600px) {
  .carousel-tray-story, .carousel-tray-favorites {
      width: 300% !important
  }
}

@media screen and (min-width: 1920px) {
  .carousel-tray-story, .carousel-tray-favorites {
      width: 200% !important
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




  .half-margin-bottom {
    h5, p {
      margin-bottom: ${rhythm(.5)}
    }
  }

  .pantograph {
    font-family: Pantograph, monospace;
    letter-spacing: 0.02em;
  }

  @media screen and (min-width: 641px) {
    .two-up {
      display: flex;
      div {
        flex-basis: calc(50% - ${rhythm(.5)});
        min-width:  calc(50% - ${rhythm(.5)});
        margin-right: ${rhythm(.5)};
        h3 {
          margin-top: 0
        }
      }
    }
  }

`

export default GlobalStyle