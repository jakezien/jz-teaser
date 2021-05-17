import React from "react"
import Helmet from 'react-helmet'

const Analytics = () => {
  return (
    <Helmet>
      <script async defer data-host="https://protegant.io" data-dnt="false" src="https://protegant.io/js/script.js" id="ZwSg9rf6GA"></script>
      <script async data-goatcounter="https://jakezien.goatcounter.com/count" src="//gc.zgo.at/count.js"></script>
      <script async src="https://app.jitt.io/pixel/I5EkPtLtiykovzTw"></script>
      <script async src={`/aap.js`}></script>
    </Helmet>
  )
}

export default Analytics;