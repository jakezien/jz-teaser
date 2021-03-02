import "./static/fonts/fonts.css"
import React from 'react';
import TCensorWrapper from './src/components/tCensor'

export const wrapPageElement = ({element, props}) => (
  <TCensorWrapper {...props}>{element}</TCensorWrapper>
)
