import { css } from "styled-components"
import { rhythm, scale } from "../utils/typography"

export const TypeStyles = css`
p.limit-width {
  max-width: ${rhythm(18.5)};
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
`