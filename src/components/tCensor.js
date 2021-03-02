import React, {useLayoutEffect} from "react"
import Helmet from "react-helmet"
import FindAndReplaceDOMText from "../utils/findAndReplaceDOMText"
import Pixellator from "./pixellator"

const TextCensor = () => {
  // let trumps = [];

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    FindAndReplaceDOMText(document.getElementById('___gatsby'), {
      preset: 'prose',
      find: 'Trump',
      wrap: "span",
      wrapClass: 'censored',
      filterElements: (node) => {
        if (node.parentNode.classList.contains('censored')) 
          return false
        else return true;
      }
    });
    
    return 
  })

  return null;
}

const TCensorWrapper = ({children}) => (
  <>
    <Helmet>
      <script src="/faceapi/face-api.min.js"></script>
    </Helmet>
    {children}
    <TextCensor />
    <Pixellator />
    <script src="/facematcher.js"></script>
  </>
);

export default TCensorWrapper