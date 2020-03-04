import React from "react"

const ThingsTeaser = ({ posts }) => {
  return (
    <section>
      <h2>Things</h2>

      {posts.map( ({node}) => {
        return(
          <div>{node.excerpt}</div>
          )
      })}
    </section>
  )
}

export default ThingsTeaser