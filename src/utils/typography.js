import Typography from "typography"

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.4,
  scaleRatio: 1.4,
  headerFontFamily: [
    "Maple",
    "sans-serif",
  ],

  bodyFontFamily: [
    "Theinhardt",
    "Arial",
    "sans-serif",
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h2': {
      fontSize: '1.33em',
    },
    'h3': {
      fontWeight: 500
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
