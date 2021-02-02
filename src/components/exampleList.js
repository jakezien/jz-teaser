import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Colors from "../utils/colors"

const ExampleList = ({items}) => {
  return (
    <ul>
      {
        items ? items.map( 
        ({node}, index ) => {
          let title = node.frontmatter.title ? node.frontmatter.title : ''
          let oneliner = node.frontmatter.oneliner ? node.frontmatter.oneliner : ''

          return(
            <li key={index}>
              <strong>{title}</strong>, {oneliner}
            </li>
          )
        }
      ) : ''}
    </ul>
  )
}

export default ExampleList;