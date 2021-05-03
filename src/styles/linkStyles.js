import { css } from "styled-components"
import { rhythm, scale } from "../utils/typography"

export const LinkStyles = css`
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

.bigtext a:after {
  bottom: 2px;
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
`