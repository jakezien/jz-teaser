import React from "react"

const WorkTeaser = ({ posts }) => {
  return (
    <section>
      <h2>Work</h2>

      {posts.map( ({node}) => {
        return(
          <div>{node.excerpt}</div>
          )
      })}
    </section>
  )
}

export default WorkTeaser