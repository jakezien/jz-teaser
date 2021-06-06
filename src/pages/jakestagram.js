import React, { useState, useEffect, useRef } from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { chunkArray } from "../utils/functions"
import styled from "styled-components"
import { GatsbyImage, getImage, getSrc } from "gatsby-plugin-image"
import VisibilitySensor from 'react-visibility-sensor'
import Lightbox from 'react-image-lightbox';

import Layout from "../templates/layout"
import Container from '../components/container'
import JakestagramImage from '../components/jakestagramImage'
import ImageMetadata from '../components/imageMetadata'

const StyledContainer = styled(Container)`
  @media screen and (max-width: 767px) {
    padding-left: 0;
    padding-right: 0;
  }
`

const ImageWrapper = styled.div``

const ImageRow = styled.div`
  ${ImageWrapper}.grid & { 
    display: flex;
    margin-bottom: 3px;
    @media (min-width: 768px) {
      margin-bottom: 28px;
    }
  }
`

const StyledGatsbyImage = styled(GatsbyImage)`
  cursor: pointer;
  ${ImageWrapper}.grid & {  
    flex: 1 0 0%;
    margin-right:3px;
    > div:first-child {
      padding-top: 100% !important;
    }
    &:not(:last-of-type) {
      margin-bottom: 0;
    }
    &:last-of-type {
      margin-right: 0;
    }
    @media (min-width: 768px) {
      margin-right: 28px;
    }
  }

  ${ImageWrapper}.list & { 
    flex: 1 0 100%;
  }
`

const Jakestagram = ({ data, location }) => {

  if (window) let padding = window.innerWidth > 767 ? 64 : 8

  const loadAmt = 12;
  const allPosts = data.Jakestagram.nodes
  const [list, setList] = useState([...allPosts.slice(0, loadAmt)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(allPosts.length > loadAmt)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [lightboxPadding, setlightboxPadding] = useState(padding)
  const [displayStyle, setDisplayStyle] = useState('grid')


  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      console.log('load more')
      setLoadMore(true)
    }
  }

  const handleImageClick = (e) => {
    let index = parseInt(e.target.getAttribute('index'))
    console.log(index)
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const handleButtonClick = (e) => {
    let name = e.target.getAttribute('name')
    // console.log(index)
    setDisplayStyle(name)
  }

  const handleLightboxPrevClick = () => {
    console.log(lightboxIndex)
    let index = (lightboxIndex + list.length - 1) % list.length
    console.log(index, lightboxIndex, list.length)
    setLightboxIndex(index);
  }

  const handleLightboxNextClick = () => {
    console.log(lightboxIndex)
    let index = (lightboxIndex + 1) % list.length
    console.log(index, lightboxIndex, list.length)
    setLightboxIndex(index)
  }

  const handleWindowResize = () => {
    let padding = window.innerWidth > 767 ? 64 : 8
    setlightboxPadding(padding);
  }

  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < allPosts.length
      const nextResults = isMore 
        ? allPosts.slice(currentLength, currentLength + loadAmt)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore])

  useEffect(() => {
    const isMore = list.length < allPosts.length
    setHasMore(isMore)
  }, [list])

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  })


  return (
    <Layout>
      <SEO title="Jakestagram" />
      <section>
        <StyledContainer>
          <div>
            <button name="grid" onClick={handleButtonClick}>Grid</button>
            <button name="list" onClick={handleButtonClick}>List</button>
          </div>
          <ImageWrapper className={displayStyle}>
          {chunkArray(list, 3).map((listChunk, i) => { 
            return (
              <ImageRow key={i}>
                <StyledGatsbyImage image={getImage(listChunk[0])} alt="" index={i*3 + 0} onClick={handleImageClick}/>
                <ImageMetadata image={listChunk[0]} />
                <StyledGatsbyImage image={getImage(listChunk[1])} alt="" index={i*3 + 1} onClick={handleImageClick}/>
                <ImageMetadata image={listChunk[1]} />
                <StyledGatsbyImage image={getImage(listChunk[2])} alt="" index={i*3 + 2} onClick={handleImageClick}/>
                <ImageMetadata image={listChunk[2]} />
              </ImageRow>
          )})}
          <VisibilitySensor 
            onChange={handleVisibilityChange} 
            partialVisibility={true}
            offset={{bottom:-300}} 
            scrollCheck={true}
            scrollThrottle={10}
            resizeCheck={true}
          >
            {hasMore ? <p>Loading…</p> : <p>That's all there is</p>}
          </VisibilitySensor>
          </ImageWrapper>

          {lightboxOpen && (
            <Lightbox
              mainSrc={getSrc(list[lightboxIndex])}
              nextSrc={getSrc(list[(lightboxIndex + 1) % list.length])}
              prevSrc={getSrc(list[(lightboxIndex + list.length - 1) % list.length])}
              onCloseRequest={() => setLightboxOpen(false)}
              onMovePrevRequest={handleLightboxPrevClick}
              onMoveNextRequest={handleLightboxNextClick}
              clickOutsideToClose={true}
              imagePadding={lightboxPadding}
            />
          )}
        </StyledContainer>
      </section>
    </Layout>
  )
}

export default Jakestagram

export const pageQuery = graphql`{
Jakestagram :  allFile(
    filter: {absolutePath: {glob: "**/jakestagram/*"}}
    sort: {fields: fields___exif___iptc___date_time, order: DESC}
  ) {
    nodes {
      fields {
        exif {
          exif {
            DateTimeOriginal
          }
          image {
            Make
            Model
          }
          iptc {
            caption
            keywords
            date_time
          }
        }
      }
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
}
`