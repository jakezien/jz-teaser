const lightTheme = {
  text:       '#555',
  textTint:   '#777',
  textShade:  '#333',
  textOnYellow: () => this.text,
  bg0:    'white',
  bg1:    'hsl(46, 100%, 96%)',
  bg2:    'hsl(46, 100%, 92%)',
  bg3:    'hsl(46, 100%, 88%)',
  bg4:    'hsl(46, 100%, 84%)',
  bg5:    'hsl(46, 100%, 80%)',
  bg6:    'hsl(46, 100%, 75%)',
  bg7:    'hsl(46, 100%, 70%)',
  yellow: 'hsl(46, 100%, 50%)',
  shadow: 'hsla(0, 0%, 0%, 0.075)'
};

const darkTheme = {
  text:         '#bbb',
  textTint:     '#ddd',
  textShade:    '#999',
  textOnYellow: lightTheme.text,
  bg0:    'black',
  bg1:    'hsl(46, 100%, 4%)',
  bg2:    'hsl(46, 100%, 8%)',
  bg3:    'hsl(46, 100%, 12%)',
  bg4:    'hsl(46, 100%, 16%)',
  bg5:    'hsl(46, 100%, 20%)',
  bg6:    'hsl(46, 100%, 25%)',
  bg7:    'hsl(46, 100%, 30%)',
  yellow: 'hsl(46, 100%, 50%)',
  shadow: 'hsla(0, 0%, 100%, 0.075)'
};


module.exports = { lightTheme, darkTheme }