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

  .bigtext a:after {
    bottom: 2px;
  }

  ul {
    margin: 0;
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
    width: ${rhythm(4)};
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
      margin: 0 1em;
    }
  }

  .carousel__slider-tray-wrapper {
    padding: 0 ${rhythm(4)}
  }

  .carousel__dot-group {
    text-align: center;
    button {
      border: none;
      background-color: ${props => props.theme.bg4};
      width: 12px;
      height: 12px;
      border-radius: 6px;
      margin: .25em;
      &:hover, &:disabled {
        background-color: ${props => props.theme.yellow};
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