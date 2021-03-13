import React, { useState } from "react"
import styled from "styled-components"

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

const ImageSearch = (props) => {

  const baseUri = 'https://www.googleapis.com/customsearch/v1?'
  const searchParams = [
    'cx=' + process.env.GATSBY_GOOGLE_CX,
    'key=' + process.env.GATSBY_GOOGLE_API_KEY,
    'imgSize=LARGE',
    'num=10',
    'searchType=image',
    'start=1',
    'q='
  ]
  const corsProxy = 'https://jz-site-support.herokuapp.com/'

  const [images, setImages] = useState([]);

  const urlForQuery = (query) => {
    return baseUri + searchParams.join('&') + encodeURIComponent(query)
  }

  // const createImg = (index, url) => {
  //   let corsUrl = corsProxy + url

  //   setImages(prevImages => {
  //     let newImages = prevImages;
  //     // console.log(newImages, index, newImages[index])
  //     newImages[index] = [corsUrl, ...prevImages[index]];
  //     console.log(newImages)
  //     return newImages;
  //   })
  // }

  const buttonClicked = (index) => {
    switch (index) {
      case 0: 
        fetchImages(index, 'trump')
        break;
      case 1: 
        fetchImages(index, 'trump and obama')
        break;
      case 2: 
        fetchImages(index, 'trump and biden')
        break;
    }
  }

  const handleSearchResults = (items) => {
    let newImages = [];
    items.forEach(item => newImages.push(corsProxy + item.link));
    setImages(images => [...images, newImages])
  }

  const fetchImages = (index, query) => {
    fetch(urlForQuery(query))
      .then(response => response.json())
      .then(data => handleSearchResults(data.items))
  }

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