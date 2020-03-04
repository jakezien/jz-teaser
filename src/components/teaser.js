import React from "react"
import { Link } from "gatsby"
import PostPreview  from "./PostPreview"

const Teaser = ({ posts, title, linkTo, linkText }) => {
  return (
    <section>
      <h2>{title}</h2>
        {posts.map( ({node}) => {
          return(<PostPreview post={node} />)
        })}
      <Link to={linkTo}>{linkText}</Link>
    </section>
  )
}

export default Teaser