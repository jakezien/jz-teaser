import React, {useCallback, useEffect} from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
const rgba = require('color-rgba')

const StyledSpan = styled.span`
  display: inline-block;
`

const Pixellator = (props) => {

  const {children, nodes} = props

  const spanRef = useCallback(node => {
    if (node) pixellateNode(node)
  })

  const pixellateNode = (node) => {
    node.classList.add('pixellated')
    node.style.visibility = 'hidden';
    setTimeout(() => {    
      let canvas = createCanvas(node);
      fillCanvas(canvas, node);
      renderCanvas(canvas, node);
      node.style.visibility = 'visible'
    }, 250)
  }

  const getPxSize = (c) => {
    let pxSize = 6;
    if (c.height >= 36)
      pxSize = 8;
    if (c.height >= 64)
      pxSize = 16;
    return pxSize
  }

  const roundTo = (input, round) => { 
    return Math.ceil(input/round)*round;
  }

  const createCanvas = (node) => {
    let c = document.createElement('canvas');
    let nodeStyle = window.getComputedStyle(node);
    
    c.width = node.getBoundingClientRect().width;
    c.height = parseFloat(nodeStyle.lineHeight);

    let pxSize = getPxSize(c);
    c.width = roundTo(c.width, pxSize)
    c.height = roundTo(c.height, pxSize)

    return c;
  };

  const setCanvasColors = (ctx, node) => {
    node.style.color = 'inherit'
    let nodeStyle = window.getComputedStyle(node);
    let color = rgba(nodeStyle.color);
    // console.log(color)

    ctx.fillStyle = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')'
    ctx.strokeStyle = 'rgb(' + color[0] + ', ' + color[1] + ', ' + color[2] + ')'
    ctx.lineWidth = 2
    ctx.font = nodeStyle.font;
    ctx.textBaseline = "middle";
  }


  const fillCanvas = (c, node) => {
    let ctx = c.getContext('2d');
    setCanvasColors(ctx, node);

    let pxSize = getPxSize(c);

    let xPx = c.width / pxSize;
    let yPx = c.height / pxSize;
    ctx.clearRect(0, 0, c.width, c.height);

    for (var i = 0; i < yPx; i++) {
      for (var j = 0; j < xPx; j++) {
        ctx.globalAlpha = getWeightedRandom();
        ctx.fillRect(j * pxSize, i * pxSize, pxSize, pxSize);
      }
    }

    ctx.globalAlpha = 1;
    ctx.fillText('Trump', 0, c.height/2, c.width)
    ctx.strokeText('Trump', 0, c.height/2, c.width)

    pixellateCanvas(c)
  }


  const pixellateCanvas = (c) => {
    let pxSize = getPxSize(c)
    let size = pxSize > 8 ? pxSize/200 : pxSize / 60,
        w = c.width * size,
        h = c.height * size;

    // draw the original image at a fraction of the final size
    let clone = c.cloneNode(true);
    if (!clone.width || !clone.height) return;
    
    clone.getContext('2d').drawImage(c, 0, 0, c.width, c.height, 0, 0, w, h);
    
    let ctx = c.getContext ('2d');
    ctx.clearRect(0, 0, c.width, c.height)

    // turn off image aliasing
    ctx.msImageSmoothingEnabled = false;
    ctx.mozImageSmoothingEnabled = false;
    ctx.webkitImageSmoothingEnabled = false;
    ctx.imageSmoothingEnabled = false;

    // enlarge the minimized image to full size    
    ctx.drawImage(clone, 0, 0, w, h, 0, 0, c.width, c.height);
  }

  const renderCanvas = function(c, node) {
    let style = node.style;

    let color = rgba(window.getComputedStyle(node).color);
    let alphaColor = 'rgba(' + color[0] + ', ' + color[1] + ', ' + color[2] + ', 0)';

    style.color = alphaColor;
    style.backgroundImage = 'url('+ c.toDataURL() +')';
    style.backgroundRepeat = 'no-repeat';
    style.backgroundPosition = 'center center';
    style.backgroundSize = '100%';
    style.textShadow = 'none';
  }

  const setupWeightedRandomTable = function(spec) {
    var i, j, table=[];
    for (i in spec) {
      for (j=0; j < spec[i]*10; j++) {
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

  const processCensoredNodes = (force) => {
    let array = [...document.getElementsByClassName('censored')];
    array.forEach(node => {
      if (!node.classList.contains('pixellated') || force === true) {
        pixellateNode(node) 
      }
    })
  }

  useEffect(() => {
    if (typeof window === 'undefined') return;

    processCensoredNodes();

    let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', processCensoredNodes(true));
    
    // Specify how to clean up after this effect:
    return function cleanup() {
      mediaQuery.removeEventListener('change', processCensoredNodes(true))
    };
  });

  if (children) {  
    return (
      <StyledSpan ref={spanRef}>
        {children}
      </StyledSpan>
    )
  }

  return null;

}
export default Pixellator;