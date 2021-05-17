// import "./static/fonts/fonts.css"
import React from 'react';
import Helmet from 'react-helmet'
import TCensorWrapper from './src/components/tCensor'

const buildScriptsDiv = () => {
      if (!document) return;

      let scriptsDiv = document.createElement('div');
      scriptsDiv.setAttribute('id','jz-analytics');

      let jitt = document.createElement('script');
      jitt.src = 'https://app.jitt.io/pixel/I5EkPtLtiykovzTw'
      jitt.async = true

      let privera = document.createElement('script');
      privera.src = 'https://privera.io/aap.js'
      privera.async = true;
      privera.setAttribute('pe-ua', 'UA-58831210-1')

      let gc = document.createElement('script');
      gc.src = '//gc.zgo.at/count.js'
      gc.async = true;
      gc.setAttribute('data-goatcounter', 'https://jakezien.goatcounter.com/count')

      let protegant = document.createElement('script');
      protegant.src = 'https://protegant.io/js/script.js'
      protegant.async = true;
      protegant.setAttribute('defer', true)
      protegant.setAttribute('data-host', 'https://protegant.io')
      protegant.setAttribute('data-dnt', 'false')
      protegant.setAttribute('id', 'ZwSg9rf6GA')

      scriptsDiv.appendChild(jitt)
      scriptsDiv.appendChild(privera)
      scriptsDiv.appendChild(gc)
      scriptsDiv.appendChild(protegant);

      return scriptsDiv;
}

// const jzAnalytics = buildScriptsDiv();

export const onRouteUpdate = (location, prevLocation) => {
      if (window.goatcounter && window.goatcounter.count) {
            window.goatcounter.count()
      } 
      if (window.privera) {
            setTimeout(() => {
                  window.privera(document)
            }, 100)
      }
}

export const wrapPageElement = ({element, props}) => (
  <>
      <TCensorWrapper {...props}>
            {element}
      </TCensorWrapper>
  </>
)
