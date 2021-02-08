import { createGlobalStyle } from "styled-components"

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
    border-bottom: 2px solid ${props => props.theme.bg2};

    &:hover, &[aria-current=page] {
      background: ${props => props.theme.bg4};
      border: 4px solid ${props => props.theme.bg4};
      border-radius: 4px;
    }
  }

  *.yellowBg {
    color: ${props => props.theme.textOnYellow}
  }



`

export default GlobalStyle