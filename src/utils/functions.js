import { GatsbyImage, getImage } from "gatsby-plugin-image";

// input a collection of file nodes and return an array of {src, height, width}
export function galleryArray(props, names, namesToSkip) {
  let array = [];
  for (let i in props.images) {
    if (namesToSkip && namesToSkip.includes(props.images[i].name))
      continue;

    if (names) {
      for (let j in names) {
        if (props.images[i].name.includes(names[j])) {
          console.log(props.images[i], getImage(props.images[i]))
          array.push(getImage(props.images[i]));
          continue;
        }
      }
    }
    
    else if(getImage(props.images[i])) 
      array.push(getImage(props.images[i]));  
  }
  return array;
}

// filter a collection of file nodes and return one with matching name
export function imageByName(props, name) {
  return getImage(props.images.filter(node => node.name.includes(name))[0])
}

export function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function setIntervalLimited(callback, interval, repetitions) {
  for (let i = 0; i < repetitions; i++) {
    setTimeout(callback, i * interval);
  }
}

export function log(varObj, label) {
  let name;
  for(let varName in varObj) {
    name = varName;
  }
  console.log(label || name, varObj[name]);
}

export function pushEvent(category, action, name, value) {
  if (window && window._paq)
    window._paq.push(['trackEvent', category, action, name, value])
}