import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import Colors from "../utils/colors"

const ExampleList = ({items}) => {
  return (
    <ul>
      {items.map( 
        ({node}, index ) => {
          return(<li>{node.frontmatter.title}, {node.frontmatter.oneliner}</li>)
        }
      )}
    </ul>
  )
}

export default ExampleList;