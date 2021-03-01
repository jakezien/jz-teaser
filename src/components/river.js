import React from 'react'
import {useSpring, animated} from 'react-spring'
import styled from "styled-components"


const River = (props) => {

  // const springProps = useSpring({
  //   config: { mass: 1, tension: 280, friction: 120 },
  //   from: {transform: 'translate3d(-100%,0,0)'},
  //   to: {transform:'translate3d(100%,0,0)'}
  // })

  const springProps = useSpring({
    config: { duration:10000 },
    from: {transform: 'translate3d(0%,0,0)'},
    to: {transform:'translate3d(-100%,0,0)'},
    delay: 2000,
    onStart: () => {console.log('onStart!')},
    onRest: () => {console.log('onRest!')}
    // reset: true
  })

  return (
    <animated.div style={springProps}>{props.children}</animated.div>
  )
}

export default River;