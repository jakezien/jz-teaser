import React, { useState } from "react"
import styled from "styled-components"


const ImageSearch = (props) => {

  const baseURI = 'https://www.googleapis.com/customsearch/v1?'
  const searchParams = [
    'cx=' + process.env.GATSBY_GOOGLE_CX,
    'key=' + process.env.GATSBY_GOOGLE_API_KEY,
    'imgSize=LARGE',
    'num=10',
    'searchType=image',
    'start=1',
    'q='
  ]

  const [images, setImages] = useState([]);

  const urlForQuery = (query) => {
    return baseURI + searchParams.join('&') + encodeURIComponent(query)
  }

  const createImg = (url) => {
    setImages(prevImages => [url, ...prevImages])
    onImageLoaded()
  }

  const fetchImages = (query) => {
    fetch(urlForQuery(query))
      .then(response => response.json())
      .then(data => data.items.forEach(item => createImg(item.link)));
  }

  return (
    <div>
      <button onClick={() => fetchImages('trump')}>Trump Images</button>
      <button onClick={() => fetchImages('trump and obama')}>Trump & Obama Images</button>
      <button onClick={() => fetchImages('trump and biden')}>Trump & Biden Images</button>
      <div className="imageContainer">
        {images.map((img, index) => {return <img key={index} src={img}/>})}
      </div>
    </div>
  )
}

export default ImageSearch;