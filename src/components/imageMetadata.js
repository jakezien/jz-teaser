import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"

const StyledSpan = styled.span`
  display: block;
  font-family: Pantograph;
  font-weight: 300;
  font-stretch: condensed;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top:${rhythm(.25)};
  margin-bottom:${rhythm(1)};

  .grid & {
    display: none
  }
`

const StyledDiv = styled.div`

`

const ImageMetadata = ({image}) => {
  let make = image.fields.exif.image.Make
  let model = image.fields.exif.image.Model
  // let date = new Date(image.fields.exif.iptc.date_time).toLocaleDateString([], {weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'numeric', minute:'numeric'})
  let localeDate = new Date(image.fields.exif.exif.DateTimeOriginal).toLocaleDateString([], {weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'numeric', minute:'numeric'})
  let date = new Date(image.fields.exif.exif.DateTimeOriginal).toDateString()
  let time = new Date(image.fields.exif.exif.DateTimeOriginal).toTimeString()
  return (
    <StyledSpan>
      {make} {model}&nbsp;&nbsp;|&nbsp;&nbsp;{date} {time} {localeDate}
    </StyledSpan>
  )
}

export default ImageMetadata;