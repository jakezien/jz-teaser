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
import Section from '../components/section'

const StyledGatsbyImage = styled(GatsbyImage)`
  flex: 1 0 0%;
  margin-right:3px;
  cursor: pointer;
  > div:first-child {
    padding-top: 100% !important;
  }
  &:not(:last-of-type) {
    margin-bottom: 0;
  }
  &:last-child {
    margin-right: 0;
  }
  @media (min-width: 768px) {
    margin-right: 28px;
  }
`

const ImageRow = styled.div`
  display: flex;
  margin-bottom: 3px;
  @media (min-width: 768px) {
    margin-bottom: 28px;
  }
`

const Jakestagram = ({ data, location }) => {

  const loadAmt = 12;
  const allPosts = data.Jakestagram.nodes
  const [list, setList] = useState([...allPosts.slice(0, loadAmt)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(allPosts.length > loadAmt)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)


  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      console.log('load more')
      setLoadMore(true)
    }
  }

  const handleImageClick = (e) => {
    setLightboxIndex(e.target.getAttribute('index'))
    setLightboxOpen(true)
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

  return (
    <Layout>
      <SEO title="Jakestagram" />
      <Section>
        {chunkArray(list, 3).map((listChunk, i) => { 
          return (
            <ImageRow key={i}>
              <StyledGatsbyImage image={getImage(listChunk[0])} alt="" index={i*3 + 0} onClick={handleImageClick}/>
              <StyledGatsbyImage image={getImage(listChunk[1])} alt="" index={i*3 + 1} onClick={handleImageClick}/>
              <StyledGatsbyImage image={getImage(listChunk[2])} alt="" index={i*3 + 2} onClick={handleImageClick}/>
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

        {lightboxOpen && (
          <Lightbox
            mainSrc={getSrc(list[lightboxIndex])}
            nextSrc={getSrc(list[(lightboxIndex + 1) % list.length])}
            prevSrc={getSrc(list[(lightboxIndex + list.length - 1) % list.length])}
            onCloseRequest={() => setLightboxOpen(false) }
            onMovePrevRequest={() =>
              setLightboxIndex((lightboxIndex + list.length - 1) % list.length)
            }
            onMoveNextRequest={() =>
              setLightboxIndex((lightboxIndex + 1) % list.length)
            }
            clickOutsideToClose={true}
          />
        )}

      </Section>
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
          formatted {
            model
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