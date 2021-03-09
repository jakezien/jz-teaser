// import "./static/fonts/fonts.css"
import React from 'react';
import Helmet from 'react-helmet'
import TCensorWrapper from './src/components/tCensor'

export const wrapPageElement = ({element, props}) => (
  <>
    <Helmet>
      <meta name="google-site-verification" content="JriCc3UmjDhEpJeVf7c0HZiWpq2Ou9IWZAcPeD5VVzk" />
      <script async defer data-domain="jakezien.github.io/jz" src="https://plausible.io/js/plausible.js"></script>
    </Helmet>
    <TCensorWrapper {...props}>{element}</TCensorWrapper>
  </>
)
