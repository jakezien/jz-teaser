import React, { useState, useRef, useEffect, useLayoutEffect } from "react"
import ReactDOM from "react-dom";
import { useSpring, useTransition, Transition, useChain, a, config } from 'react-spring'
import styled from "styled-components"
import Switch from "react-switch"
import { shuffleArray, setIntervalLimited, log } from '../utils/functions'
import { rhythm } from "../utils/typography"
import WidthBleeder from './widthBleeder'
import CensoredImg from './censoredImg'

// styled-components
const ImageContainer = styled('div').withConfig({
  shouldForwardProp: prop => true
})`
  height: 480px;
  overflow-x: scroll;
  overflow-y: hidden;
  position: relative;

  &[show-boxes='false'] {
    canvas.boxCanvas {
      opacity: 0;
    }
  }

  &[show-pixellate='false'] {
    canvas.faceCanvas {
      opacity: 0;
    }
  }
`

const ImageControls = styled.div`
`

const SearchButton = styled.button`
`

const SlideWrapper = styled(a.div)`
  position: absolute;
  display: inline-block;
`

const ImageSearch = (props) => {

  const jzServerUrl = 'https://jz-site-support.herokuapp.com/'
  let queryPage = useRef(1)
  const srcList = useRef([]);
  const slideRefs = useRef([])
  const imageContainerRef = useRef()
  const [srcListPopulated, setSrcListPopulated] = useState(false);

  // Real data state
  const [slides, setSlides] = useState([]);

  // UI state
  const [showPixellate, setShowPixellate] = useState(true);
  const [showBoxes, setShowBoxes] = useState(false);

  // Get a headstart by prefetching the src urls for the images we're gonna load later.
  const populateSrcList = async () => {

    // console.log('populateSrcList')

    // Calls my server, which fetches the images from Google and returns their urls.
    const fetchSrcsForQuery = async (query, page) => {
      const response = await fetch(jzServerUrl, {headers: {jzimages:query, jzimagespage: page}})
      const json = await response.json()
      const links = []
      if (!json.data.items) return
      json.data.items.forEach(item => links.push(jzServerUrl + item.link))
      return links
    }

    const t = await fetchSrcsForQuery('trump', queryPage.current)
    const tno = await fetchSrcsForQuery('trump and obama', queryPage.current)
    const tnb = await fetchSrcsForQuery('trump and biden', queryPage.current)
    const tnp = await fetchSrcsForQuery('trump and putin', queryPage.current)

    let combined = [].concat(t, tno, tnb, tnp)
    shuffleArray(combined)
    // console.log('srcList', srcList.current)
    srcList.current = srcList.current.concat(combined)
    console.log(srcList.current.length)
    setSrcListPopulated(true)


    // Increment this so next time we fetch srcs, we get the subsequent ten results
    queryPage.current++;
    console.log(queryPage.current)
  }

  // Call this when we run out of image src urls.
  const refreshSrcs = async () => {
    await populateSrcList();
    // do something with state
  }

  // UI logic
  const handleSwitch = (index) => {
    switch (index) {
      case 0:
        setShowPixellate(!showPixellate);
        break;
      case 1:
        setShowBoxes(!showBoxes);
        break;
    }
  }

  const addOneSlide = () => {
    console.log('before', imageContainerRef.current.childElementCount) 
    // console.log('slides', slides)
    let newSlide = {src:srcList.current.shift(), x:0}
    setSlides(slides => [newSlide, ...slides])
  }

  const updateSlidePositions = (width) => {
    const margin = 20;
    let newSlides = [...slides] 
    for (let i=1; i < newSlides.length; i++) {
      let slide = newSlides[i]
      slide.x = slide.x + width + margin;
    }
    setSlides(newSlides);
  }

  const buttonClicked = () => {
    // setIntervalLimited(() => {addOneSlide()}, 4000, 3)
    addOneSlide()
  }

  useLayoutEffect(() => {
    if (!imageContainerRef.current.childElementCount) return;
    let img = imageContainerRef.current.firstChild.firstChild
    img.addEventListener("load", () => {
      updateSlidePositions(imageContainerRef.current.firstChild.offsetWidth)
    });
  })


  // Init, only called once, on mount
  useEffect(() => {
    if (!srcList.current.length) {
      populateSrcList();
    }
  }, [])


  const transition = useTransition(slides, {
    from: ({x}) => ({ x, y:'150%', }),
    enter: ({x}) => ({ x, y:'0%', delay:700, config:config.stiff }),
    update:({x}) => ({ x, config:config.default }),
    leave: { opacity: 0 },   
  })

  return (
    <div>
      <ImageContainer ref={imageContainerRef} show-pixellate={showPixellate.toString()} show-boxes={showBoxes.toString()}>
        {transition((props, slide) => <CensoredImg src={slide.src} style={props} />)}
      </ImageContainer>

      <ImageControls>
        <SearchButton disabled={!srcListPopulated} onClick={buttonClicked}>Search for Trump Images</SearchButton>
        <div>
          <label>
            <span>Censor his face</span>
            <Switch onChange={() => handleSwitch(0)} checked={showPixellate} />
          </label>
          <label>
            <span>Show recognized faces</span>
            <Switch onChange={() => handleSwitch(1)} checked={showBoxes} />
          </label>
        </div>
      </ImageControls>

    </div>
  )
}

export default ImageSearch;

{/*<ImageContainer>
  {images.map((array, arrayIndex) => {return(
    <div key={arrayIndex}>
      {array.map((url, urlIndex) => {return(
        <img 
          key={urlIndex} 
          src={url} 
          crossOrigin="anonymous" 
          onLoad={e => faceMatcher.detectFacesInImg(e.target)}
        />
      )})}
    </div>
  )})}
</ImageContainer>*/}


//  // load images 8 at a time and animate them into the display area.
// if (!srcList.current.length) {
//   refreshSrcs();
// }
// else {
//   setIntervalLimited(addOneSrcToImages, 2000, 5)
// }
