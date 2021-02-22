import React, {useLayoutEffect} from "react"
import FindAndReplaceDOMText from "../utils/findAndReplaceDOMText"

const TCensor = () => {
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

export default TCensor;