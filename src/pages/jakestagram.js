import React, { useState, useEffect, useRef } from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { chunkArray } from "../utils/functions"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import VisibilitySensor from 'react-visibility-sensor'

import Layout from "../templates/layout"
import Section from '../components/section'

const StyledGatsbyImage = styled(GatsbyImage)`
  flex: 1 0 0%;
  margin-right:3px;
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


  const handleVisibilityChange = (isVisible) => {
    if (isVisible) {
      console.log('load more')
      setLoadMore(true)
    }
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
              <StyledGatsbyImage image={getImage(listChunk[0])} alt=""/>
              <StyledGatsbyImage image={getImage(listChunk[1])} alt=""/>
              <StyledGatsbyImage image={getImage(listChunk[2])} alt=""/>
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
        gatsbyImageData(layout: FULL_WIDTH, aspectRatio:1)
      }
    }
  }
}
`