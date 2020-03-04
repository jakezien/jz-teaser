import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ post }) => {
  return (
    <Link to={post.fields.slug}>
      <div>
        <h2>{post.frontmatter.title}</h2>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  )
}

export default PostPreview