import Typography from "typography"


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
      letterSpacing: '-0.0125em'
      // fontSize: '1.33em',
    },
    'h3': {
      // fontWeight: 500
    },
    'p': {
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
