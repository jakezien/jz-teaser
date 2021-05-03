import { css } from "styled-components"
import { rhythm, scale } from "../utils/typography"

export const TwoUpStyles = css`
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