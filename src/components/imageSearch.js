import React, { useState } from "react"
import { useSpring, animated } from 'react-spring'
import styled from "styled-components"

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const ImageSearch = (props) => {

  const corsProxy = 'https://jz-site-support.herokuapp.com/'
  const [images, setImages] = useState([]);
  const srcList = []

  const buttonClicked = (index) => {
    switch (index) {
      case 0: 
        fetchImages('trump')
        break;
      case 1: 
        fetchImages('trump and obama')
        break;
      case 2: 
        fetchImages('trump and biden')
        break;
    }
  }

  const handleSearchResults = (items) => {
    let newImages = [];
    if (!items) return;
    items.forEach(item => newImages.push(corsProxy + item.link));
    setImages(images => [...images, newImages])
  }

  const fetchImages = (query) => {
    fetch(corsProxy, {headers: {jzimages: query}})
      .then(response => response.json())
      .then(json => handleSearchResults(json.data.items))
  }

  const fetchSrcs = async (query) => {
    const response = await fetch(corsProxy, {headers: {jzimages: query}})
    const json = await response.json()
    return json.data.items
  }

  const init = async () => {  
    const t = await fetchSrcs('trump')
    const tno = await fetchSrcs('trump and obama')
    const tnb = await fetchSrcs('trump and biden')
    console.log('init', t, tno, tnb)
  }
  init()

  return (
    <div>
      <button onClick={() => buttonClicked(0)}>Trump Images</button>
      <button onClick={() => buttonClicked(1)}>Trump & Obama Images</button>
      <button onClick={() => buttonClicked(2)}>Trump & Biden Images</button>

      <ImageContainer>
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
      </ImageContainer>
    </div>
  )
}

export default ImageSearch;