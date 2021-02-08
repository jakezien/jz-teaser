import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"

const ExampleList = ({items}) => {
  return (
    <ul>
      {items ? items.map( 
        ({node}, index ) => {
          let title = node.frontmatter.title ? node.frontmatter.title : ''
          let oneliner = node.frontmatter.oneliner ? node.frontmatter.oneliner : ''
          let slug = node.fields.slug ? node.fields.slug : ''

          return(
            <Link to={slug} key={index}>
              <li>
                <strong>{title}</strong>, {oneliner}
              </li>
            </Link>
          )
        }
      ) : ''}
    </ul>
  )
}

export default ExampleList;