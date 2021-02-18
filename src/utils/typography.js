import Typography from "typography"

const typography = new Typography({

  baseFontSize: "20px",
  baseLineHeight: 1.35,
  scaleRatio: 4.5,
 
  headerFontFamily: ["Pantograph"],
  headerWeight: 500,
 
  bodyFontFamily: ["covik-sans"],
  bodyWeight: 300,

  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      fontStretch: 'extra-condensed',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      lineHeight: '0.9'
    },

    'h2': {
      opacity: 0.9,
      marginTop: rhythm(1),
      marginBottom: rhythm(.5),
      fontStretch: 'extra-condensed',
      ...adjustFontSizeTo(rhythm(2.25))
    },
    
    'h3': {
      opacity: 0.8,
      marginTop: rhythm(1),
      marginBottom: rhythm(.25),
      fontStretch: 'condensed',
      fontWeight: 500,
      ...adjustFontSizeTo(rhythm(1.5), 1.5)
    },

    'h4': {
      opacity: 0.9,
      marginBottom: rhythm(.5),
      fontStretch: 'condensed',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
    },

    'h5': {
      opacity: 0.75,
      fontFamily: 'covik-sans',
      fontWeight: 400,
      ...adjustFontSizeTo(rhythm(1), 1.25),
      letterSpacing: '-0.02em',
      maxWidth: '80%'
    },

    'strong': {
      opacity: 0.9
    },

    'figcaption': {
      opacity: 0.6,
      marginBottom: '1em',
      textAlign: 'center'
    },

    'p, a, span, li, figcaption': {
      letterSpacing: '-0.02em'
    },
    
    'a, a *': {
      color: 'inherit'
    },

    '*.inputFont': {
      fontFamily: 'Pantograph',
    },
    
    'p>a, *.link': {
      fontFamily: 'Pantograph',
      textDecoration: 'none',
      letterSpacing: '0.02em',
      fontSize: '1.1em',
      fontWeight: 400,
      position: 'relative',
      top: '.05em'
    },
  })
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography;
export const rhythm = typography.rhythm
export const scale = typography.scale
