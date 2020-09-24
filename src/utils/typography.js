import Typography from "typography"
import Colors from './colors'

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.4,
  scaleRatio: 2.25,
  headerFontFamily: [
    "IBM Plex Mono",
    "Authentic Sans",
    "sans-serif",
  ],

  bodyFontFamily: [
    "Authentic Sans",
    "IBM Plex Mono",
    "Theinhardt",
    "Maple",
    "sans-serif",
  ],

  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      letterSpacing: '-0.0075em'
      // fontSize: '2.5em',
    },
    'h2': {
      // letterSpacing: '-0.0125em',
      marginTop: '1rem',
      marginBottom: '1rem'
      // fontSize: '1.33em',
    },
    'h2 a, a h2': {
      color: '#444'
    },
    'h3 a, a h3': {
      color: '#585858'
    },
    'h3': {
      marginBottom: '1rem'
      // fontWeight: 500
    },
    'p': {
      color: '#444'
    },
    'p>a, *.link': {
      fontFamily: "IBM Plex Mono",
      color: '#777'
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
