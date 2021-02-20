import React, {useCallback, useEffect} from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const StyledSpan = styled.span`
  display: inline-block;
`

const Pixellator = (props) => {

  const {children, nodes} = props

  const spanRef = useCallback(node => {
    if (node) pixellateNode(node)
  })

  const pixellateNode = (node) => {
    let canvas = createCanvas(node);
    fillCanvas(canvas);
    drawCanvas(canvas, node);  
  }

  const createCanvas = (node) => {
    let canvas = document.createElement('canvas');
    let rect = node.getBoundingClientRect();

    let nodeStyle = window.getComputedStyle(node);
    
    canvas.width = rect.width;
    canvas.height = parseFloat(nodeStyle.lineHeight); 
    let ctx = canvas.getContext('2d');
    // document.body.appendChild(canvas); // Uncomment for debug
    ctx.fillStyle = nodeStyle.color;
    return canvas;
  };

  const roundTo = (input, round) => { 
    return Math.ceil(input/round)*round;
  }

  const fillCanvas = function(c) {
    var pxSize = 6;
    if (c.height >= 36)
      pxSize = 8;
    if (c.height >= 64)
      pxSize = 16;

    c.width = roundTo(c.width, pxSize)
    c.height = roundTo(c.height, pxSize)

    var ctx = c.getContext('2d');

    var xPx = c.width / pxSize;
    var yPx = c.height / pxSize;
    ctx.clearRect(0, 0, c.width, c.height);
    for (var i = 0; i < yPx; i++) {
      for (var j = 0; j < xPx; j++) {
        ctx.globalAlpha = getWeightedRandom();
        ctx.fillRect(j * pxSize, i * pxSize, pxSize, pxSize);
      }
    }
  }

  const drawCanvas = function(c, node) {
    var style = node.style;
    style.backgroundImage = 'url('+ c.toDataURL() +')';
    style.backgroundRepeat = 'no-repeat';
    style.backgroundPosition = 'center center';
    style.backgroundSize = '100%';
    style.color = 'transparent';
    style.textShadow = 'none';
  }

  const setupWeightedRandomTable = function(spec) {
    var i, j, table=[];
    for (i in spec) {
      for (j=0; j<spec[i]*10; j++) {
        table.push(i);
      }
    }
    return function() {
      return table[Math.floor(Math.random() * table.length)];
    }
  }

  const getWeightedRandom = setupWeightedRandomTable({
    0 : 12,
    0.1 : 10,
    0.2 : 8,
    0.3 : 7,
    0.4 : 6,
    0.5 : 5,
    0.6 : 3,
    0.7 : 2,
    0.8 : 1,
    0.9 : 0.5,
    1 : 0.25
  });

  useEffect(() => {
    let array = [...document.getElementsByClassName('censored')];
    array.forEach(node => pixellateNode(node))
  })


  return (
    <StyledSpan ref={spanRef}>
      {children}
    </StyledSpan>
  )
}
export default Pixellator;