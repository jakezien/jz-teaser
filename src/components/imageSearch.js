import React, { useState, useRef, useEffect } from "react"
import { useSpring, useTransition, animated } from 'react-spring'
import { shuffleArray } from '../utils/functions'
import WidthBleeder from './widthBleeder'
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import Switch from "react-switch"

const ImageContainer = styled('div').withConfig({
  shouldForwardProp: prop => true
})`
  height: 480px;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-direction: row;
  white-space: nowrap;

  > div.censor-wrapper:not(:last-child) {
    margin-right: 1em;
  }

  img {
    box-sizing: border-box;
    height:480px;
    max-height: 480px;
    width: auto;
    margin: 0;
  }

  canvas {
    transition: opacity 0.11s;
  }

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

const ImageSearch = (props) => {

  const jzServerUrl = 'https://jz-site-support.herokuapp.com/'
  const [images, setImages] = useState([]);
  const [showPixellate, setShowPixellate] = useState(true);
  const [showBoxes, setShowBoxes] = useState(false);
  const srcList = useRef([]);
  const [srcListPopulated, setSrcListPopulated] = useState(false);
  let queryPage = useRef(1)


  // Get a headstart by prefetching the src urls for the images we're gonna load later.
  const populateSrcList = async () => {

    // console.log('populateSrcList')

    // Helper function that calls my server, which fetches the images from Google and returns their urls.
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
    console.log('refff', srcList.current)
    srcList.current = srcList.current.concat(combined)
    console.log(srcList.current.length)
    setSrcListPopulated(true)



    // Increment this so next time we fetch srcs, we get the subsequent ten results
    queryPage.current++;
    console.log(queryPage.current)
  }

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

  const buttonClicked = () => {

    // helper to grab more images when we run out
    const refreshSrcs = async () => {
      await populateSrcList();
      setImages(images => [...images, ...srcList.current.splice(0,8)])
      console.log('hmm')
    }
    
    // load images 8 at a time and animate them into the display area.
    if (!srcList.current.length) {
      refreshSrcs();
    }
    else {
      setImages(images => [...images, ...srcList.current.splice(0,8)])
    }
  }


  useEffect(() => {
    if (!srcList.current.length) {
      populateSrcList();
      console.log('pop!')
    }
  }, [])

  let tProps = {
    config: { mass: 1, tension: 330, friction: 12 },
    from: { transform: 'translate3d(0,480px,0)' },
    enter: { transform: 'translate3d(0,0px,0)' },
    leave: { transform: 'translate3d(0,-480px,0)' },
  }

  const transition = useTransition(images, tProps)
  const fragment = transition((style, item) => {
    console.log('frag')
    return <animated.img 
              src={item} 
              style={style} 
              crossOrigin="anonymous" 
              onLoad={e => faceMatcher.detectFacesInImg(e.target)}
            />
  })

  return (
    <div>
      <ImageContainer show-pixellate={showPixellate.toString()} show-boxes={showBoxes.toString()}>
        {fragment}
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