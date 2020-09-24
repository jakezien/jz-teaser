import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
import ResumeItem from "../components/resumeItem"
import styled from "styled-components"


const StyledResumeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

let width = 50
let space = rhythm(1)
let doubleSpace = rhythm(2)
const StyledResumeItem = styled(ResumeItem)`
  margin-bottom: ${doubleSpace};
  @media only screen and (min-width:720px) {
    flex-basis: calc(${width}% - ${space});
    min-width:  calc(${width}% - ${space});
    margin-bottom: ${doubleSpace};
    margin-right: ${space};
  }
`


const Resume = ({ className }) => {

  const data = useStaticQuery(graphql`
    query ResumeQuery {
      resumeItems: allMdx(
        filter: { fileAbsolutePath: {regex: "\\/content/resume/"} },
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            body
            fields {
              slug
            }
            frontmatter {
              org
              title
              jobDates
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      <SEO title="Jake Zien" />
      <h2>Resume</h2>
      <StyledResumeContainer className={className}>
        {data.resumeItems.edges.map( ({node}, index ) => {
          return(<StyledResumeItem key={index} item={node}/>)
        })}
      </StyledResumeContainer>
    </div>
  )
}

export default Resume