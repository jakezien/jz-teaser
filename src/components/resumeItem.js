import React from "react"
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"

const ResumeItem = ({ item, className }) => {

  const Container = styled.div`
    background:yellow;
  `


  return (
    <Container className={className}>
      <h2>{item.frontmatter.title}</h2>
      <h3>{item.frontmatter.org}</h3>
      <h4>{item.frontmatter.jobDates}</h4>
      <MDXProvider>
        <MDXRenderer>{item.body}</MDXRenderer>
      </MDXProvider>
    </Container>
  )
}

export default ResumeItem