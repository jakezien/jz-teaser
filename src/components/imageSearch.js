import React, { useState, useEffect } from "react"
import { useSpring, animated } from 'react-spring'
import { shuffleArray } from '../utils/functions'
import WidthBleeder from './widthBleeder'
import { rhythm } from "../utils/typography"
import styled from "styled-components"
import Switch from "react-switch"

const ImageContainer = styled.div`
  height: ${rhythm(24)};
  overflow-x: scroll;
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  > div {
    flex-shrink: 0;
  }

  &[data-showboxes=false] {
    canvas.boxCanvas {
      visibility: hidden;
    }
  }

  &[data-showpixellate=false] {
    canvas.faceCanvas {
      visibility: hidden;
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
  let srcList = []
  let populateSrcListCalled = false;
  let queryPage = 1
  let displayedImagesIndex = 0;

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

    const t = await fetchSrcsForQuery('trump', queryPage)
    const tno = await fetchSrcsForQuery('trump and obama', queryPage)
    const tnb = await fetchSrcsForQuery('trump and biden', queryPage)
    const tnp = await fetchSrcsForQuery('trump and putin', queryPage)

    let combined = [].concat(t, tno, tnb, tnp)
    shuffleArray(combined)
    srcList = srcList.concat(combined)


    // Increment this so next time we fetch srcs, we get the subsequent ten results
    queryPage++;
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
    // load images 8 at a time and animate them into the display area.
    setImages(images => [...images, ...srcList.splice(0,8)])
  }

  const handleSearchResults = (items) => {
    let newImages = [];
    if (!items) return;
    items.forEach(item => newImages.push(jzServerUrl + item.link));
    setImages(images => [newImages, images])
  }


  if (!populateSrcListCalled) {
    populateSrcListCalled = true;
    populateSrcList();
  }


  return (
    <div>
      <ImageContainer showpixellate={showPixellate} showboxes={showBoxes} data-showpixellate={showPixellate} data-showboxes={showBoxes}>
        {images.map((url, urlIndex) => {return(
          <img 
            src={url} 
            crossOrigin="anonymous" 
            onLoad={e => faceMatcher.detectFacesInImg(e.target)}
            key={urlIndex} 
          />
        )})}
      </ImageContainer>

      <ImageControls>
        <SearchButton onClick={buttonClicked}>Search for Trump Images</SearchButton>
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