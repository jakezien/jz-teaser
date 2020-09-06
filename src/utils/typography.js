import Typography from "typography"

export const jzYellow = 'rgb(255, 194, 41)';

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
    "IBM Plex Mono",
    "Authentic Sans",
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
    'a': {
      color: '#777'
    },
    'a:hover': {
      color: jzYellow
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
