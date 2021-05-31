import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import { chunkArray } from "../utils/functions"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Layout from "../templates/layout"
import Section from '../components/section'

const Jakestagram = ({ data, location }) => {

  const nodes = chunkArray(Object.values(data.Jakestagram.nodes), 3);
  console.log(nodes)

  return (
    <Layout>
      <SEO title="Jakestagram" />
      <Section>
        {nodes.map((nodesArray, i) => { 
          return (
            <div style={{display:'flex', height:'200px'}}>
              <GatsbyImage image={getImage(nodesArray[0])} style={{flex:'1 0 33%'}}/>
              <GatsbyImage image={getImage(nodesArray[1])} style={{flex:'1 0 33%'}}/>
              <GatsbyImage image={getImage(nodesArray[2])} style={{flex:'1 0 33%'}}/>
            </div>
        )})}
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