import Typography from "typography"


const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.4,
  scaleRatio: 2.25,
  headerFontFamily: [
    "Authentic Sans",
    "sans-serif",
  ],

  bodyFontFamily: [
    "Authentic Sans",
    "Theinhardt",
    "Maple",
    "sans-serif",
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      // fontSize: '2.5em',
      fontWeight: 700
    },
    'h2': {
      // fontSize: '1.33em',
      fontWeight: 700
    },
    'h3': {
      // fontWeight: 500
      fontWeight: 500
    },
    'p': {
      fontWeight: 300
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
