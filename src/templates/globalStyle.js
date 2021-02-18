import { createGlobalStyle } from "styled-components"
import { rhythm, scale } from "../utils/typography"


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.bg0};
    color: ${props => (props.theme.text)};
  }

  a {
    // text-decoration: none;
  }

  p>a, *.link {
    color: ${props => props.theme.text};
    border-bottom: 2px solid ${props => props.theme.bg4};

    &:hover, &[aria-current=page] {
      background: ${props => props.theme.bg4};
      border: 4px solid ${props => props.theme.bg4};
      border-radius: 4px;
    }
  }

  ul {
    margin: 0;
  }

  *.yellowBg {
    color: ${props => props.theme.textOnYellow}
  }

  .react-photo-gallery--gallery {
    margin-bottom: ${rhythm(1)}
  }

  [class*=widthBleeder] .react-photo-gallery--gallery {
    margin-bottom: 0
  }

  .half-margin-bottom {
    h5, p {
      margin-bottom: ${rhythm(.5)}
    }
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