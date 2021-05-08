import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import StoryPostCard from "../templates/storyPostCard"
import WidthBleeder from "./widthBleeder"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

export const hPadding = rhythm(.75); 
export const wideMaxWidth = rhythm(40); 
export const wideHPadding = rhythm(3);

const Story = (props) => {

	const data =  useStaticQuery(graphql`
		query StoryQuery { 
			allMdx(filter: {fileAbsolutePath: {regex: "\\/content/about/story/"}},  sort: {fields: [frontmatter___order], order: ASC}) {
				nodes {
					slug
					body
					frontmatter {
						order
						title
						subtitle
						imageMargin
					}
				}
			}
			allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, absolutePath: {regex: "\\/content/about/story/"}}) {
				nodes {
					name
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH, aspectRatio:1.33, backgroundColor:"transparent", transformOptions:{fit:CONTAIN})
					}
				}
			}
		}
		`)

	const getImageForPost = (post) => data.allFile.nodes.filter(imgNode => post.slug.includes(imgNode.name))
	

	return(
		<WidthBleeder >
			<CarouselProvider
			      naturalSlideWidth={400}
			      naturalSlideHeight={400}
			      totalSlides={9}
			      visibleSlides={1}
			      step={1}
			      isIntrinsicHeight={true}
			      lockOnWindowScroll={true}
			>
				<Slider className='carousel-slider-story' classNameTray="carousel-tray-story">
					{data.allMdx.nodes.map((post, index) => {console.log(index, post.slug, post.frontmatter); return (

						<Slide key={index} index={index}>
							<StoryPostCard post={post} coverImage={getImageForPost(post)} />
						</Slide>
					)})}
				</Slider>
			      <ButtonBack />
			      <ButtonNext />
			      <DotGroup showAsSelectedForCurrentSlideOnly={true}/>
			</CarouselProvider>
		</WidthBleeder>
	)
}


export default Story;