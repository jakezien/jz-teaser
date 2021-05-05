import { css } from "styled-components"
import { rhythm, scale } from "../utils/typography"

export const TwoUpStyles = css`
@media screen and (min-width: 641px) {
    .two-up {
      display: flex;
      div {
        flex: 1 1 calc(50% - ${rhythm(1)});
        max-width:  50%;
        &:first-child {
          margin-right: ${rhythm(1)};
        }
        h3 {
          margin-top: 0
        }
      }
    }
  }
`