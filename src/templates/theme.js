const lightTheme = {
  text:       '#555',
  textTint:   '#777',
  textShade:  '#333',
  textOnYellow: () => this.text,
  linkHover: 'hsl(46,80%,45%)',
  bg0:    'white',
  bg1:    'hsl(46, 100%, 96%)',
  bg2:    'hsl(46, 100%, 92%)',
  bg3:    'hsl(46, 100%, 88%)',
  bg4:    'hsl(46, 100%, 84%)',
  bg5:    'hsl(46, 100%, 80%)',
  bg6:    'hsl(46, 100%, 75%)',
  bg7:    'hsl(46, 100%, 70%)',
  bg8:    'hsl(46, 100%, 65%)',
  yellow: 'hsl(46, 100%, 50%)',
  shadow: 'hsla(0, 0%, 0%, 0.075)',
  offWhite: 'hsl(46, 50%, 98%)'
};

const darkTheme = {
  text:         '#bbb',
  textTint:     '#ddd',
  textShade:    '#999',
  textOnYellow: lightTheme.textShade,
  linkHover: 'hsl(46,60%,70%)',
  bg0:    'black',
  bg1:    'hsl(46, 100%, 5%)',
  bg2:    'hsl(46, 100%, 8%)',
  bg3:    'hsl(46, 100%, 12%)',
  bg4:    'hsl(46, 100%, 16%)',
  bg5:    'hsl(46, 100%, 20%)',
  bg6:    'hsl(46, 100%, 25%)',
  bg7:    'hsl(46, 100%, 30%)',
  bg8:    'hsl(46, 100%, 35%)',
  yellow: 'hsl(46, 100%, 50%)',
  shadow: 'hsla(0, 0%, 100%, 0.075)'
};


module.exports = { lightTheme, darkTheme }