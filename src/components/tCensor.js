import React, {useLayoutEffect} from "react"
import AppendHead from "react-append-head"
import FindAndReplaceDOMText from "../utils/findAndReplaceDOMText"
import Pixellator from "./pixellator"

const TextCensor = () => {
  const searchAndWrapText = () => {
    if (typeof window === 'undefined') return;

    FindAndReplaceDOMText(document.getElementById('___gatsby'), {
      preset: 'prose',
      find: 'Trump',
      wrap: "span",
      wrapClass: 'censored',
      filterElements: (node) => {
        if ((node.parentNode.classList && node.parentNode.classList.contains('censored'))
           || (node.classList && node.classList.contains('censored'))) 
          return false
        else return true;
      }
    });
    return
  }

  useLayoutEffect(() => {
    searchAndWrapText();
  })

  return null;
}

const TCensorWrapper = ({children}) => (
  <>
    <AppendHead>
      <script name='faceapi' src={`${process.env.GATSBY_PATH_PREFIX}/faceapi/face-api.min.js`} order='0'></script>
      <script name='facematcher' src={`${process.env.GATSBY_PATH_PREFIX}/facematcher.js`} order='1'></script>
    </AppendHead>
    {children}
    <TextCensor />
    <Pixellator />
  </>
);

export default TCensorWrapper