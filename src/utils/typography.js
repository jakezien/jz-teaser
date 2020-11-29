import Typography from "typography"
import Colors from './colors'

const typography = new Typography({
  baseFontSize: "20px",
  baseLineHeight: 1.35,
  scaleRatio: 4.5,
 
  headerFontFamily: ["Pantograph"],
  headerWeight: 500,
  headerGray: 50,
 
  bodyFontFamily: ["Bau"],
  bodyGray: 30,

  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    'h1': {
      fontStretch: 'extra-condensed',
      fontWeight: 400,
      letterSpacing: '-0.01em',
      lineHeight: '0.9'
    },

    'h2': {
      fontStretch: 'extra-condensed',
      ...adjustFontSizeTo(rhythm(2.25))
    },
    
    'h3': {
      opacity: 0.8,
      fontStretch: 'condensed',
      fontWeight: 500
    },
    
    'a, a *': {
      color: 'inherit'
    },

    '*.inputFont': {
      fontFamily: 'Pantograph',
    },
    
    'p>a, *.link': {
      fontFamily: 'Pantograph',
      color: '#777',
      textDecoration: 'none',
      borderBottom: '2px solid ' + Colors.bg1,
      letterSpacing: '0.02em',
      fontSize: '1.1em',
      fontWeight: 400,
      position: 'relative',
      top: '.05em'
    },

    'p>a:hover, *.link:hover': {
      background: Colors.bg3,
      color: '#444',
      border: '4px solid ' + Colors.bg3,
      borderRadius: '4px',
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
