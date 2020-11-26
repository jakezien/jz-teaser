import Typography from "typography"
import Colors from './colors'

const headerOpacity = 0.9

const inputFontStyles = { 
  fontFamily: "IBM Plex Mono",
  fontFamily: "Input",
  letterSpacing: '-0.066em;',
  fontWeight: 600
}

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.35,
  headerWeight: 600,
  scaleRatio: 2.5,
  headerFontFamily: [
    "Input",
    "IBM Plex Mono",
    "monospace",
  ],
  bodyFontFamily: [
    "Bau",
    "system-ui",
    "sans-serif",
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      letterSpacing: '-0.066em',
      opacity: headerOpacity,
      marginBottom: rhythm(.5),
      marginTop: rhythm(1.5),
    },

    'h2': {
      letterSpacing: '-0.066em',
      opacity: headerOpacity,
      marginBottom: rhythm(.5),
      marginTop: rhythm(1.5),
    },
    
    'h3': {
      letterSpacing: '-0.066em',
      opacity: 0.8,
      marginTop: rhythm(.5),
    },
    
    'a, a *': {
      color: 'inherit'
    },
    '*.inputFont': {
      ...inputFontStyles
    },
    
    'p>a, *.link': {
      ...inputFontStyles,
      color: '#777',
      textDecoration: 'none',
      borderBottom: '2px solid ' + Colors.bg1,
      fontWeight: 500
    },
    'p>a': {
      fontSize: '0.925em',
      lineHeight: '1em'
    },
    'p>a:hover, *.link:hover': {
      background: Colors.bg3,
      color: '#444',
      border: '4px solid ' + Colors.bg3,
      borderRadius: '4px',
      position: 'relative',
      left: '-4px'
    }
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
