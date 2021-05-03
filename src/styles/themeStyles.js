import { css } from "styled-components"

export const ThemeStyles = css`
  body {
    background-color: ${props => props.theme.bg0};
    color: ${props => (props.theme.text)};
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
`