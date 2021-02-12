import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const Dates = styled.h4`
  margin-top: 0;
  margin-bottom: .5rem;
  opacity: 0.7;
`

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: .5rem;
`

const Org = styled.h3`
  margin-top: 0;
  margin-bottom: 1rem;
  opacity: 0.7;
`


const ResumeItem = ({ item, className }) => {



  return (
    <div className={className}>
      <Dates>{item.frontmatter.jobDates}</Dates>
      <Title>{item.frontmatter.title}</Title>
      <Org>{item.frontmatter.org}</Org>
      <MDXProvider>
        <MDXRenderer>{item.body}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default ResumeItem