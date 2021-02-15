import { GatsbyImage, getImage } from "gatsby-plugin-image";

// input a collection of file nodes and return an array of {src, height, width}
export function galleryArray(props, namesToSkip) {
  let array = [];
  for (let i in props.images) {
    if (namesToSkip && namesToSkip.includes(props.images[i].name))
      continue;
    array.push(props.images[i].childImageSharp.original)
  }
  return array;
}

// filter a collection of file nodes and return one with matching name
export function imageByName(props, name, getFile) {
  let img = props.images.filter(node => 
    {return node.name.includes(name)})[0]
  getFile ? img = getImage(img) : img = img;
  return img;
}