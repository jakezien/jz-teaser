import React from "react"
import { Link } from "gatsby"

const PostPreview = ({ post, className }) => {
  return (
    <Link to={post.fields.slug} className={className}>
      <div>
        <h2>{post.frontmatter.title}</h2>
        <caption>{post.frontmatter.category}</caption>
        <p>{post.excerpt}</p>
      </div>
    </Link>
  )
}

export default PostPreview