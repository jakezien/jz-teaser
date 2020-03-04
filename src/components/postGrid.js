import React from "react"
import PostPreview from "./postPreview"

const PostGrid = ({ posts }) => {
  return (
    <section>
      {posts.map( ({node}) => {
        return(<PostPreview post={node} />)
      })}
    </section>
  )
}

export default PostGrid