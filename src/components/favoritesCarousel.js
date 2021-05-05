import React from "react"
import {Link} from "gatsby"
import { useStaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import { rhythm, scale } from "../utils/typography"
import FavoritePostCard from "../templates/favoritePostCard"
import WidthBleeder from "./widthBleeder"
import Card from "./card"
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, DotGroup } from 'pure-react-carousel';

export const hPadding = rhythm(.75); 
export const wideMaxWidth = rhythm(40); 
export const wideHPadding = rhythm(3);
export const remToPx = 20; // BAD BAD BAD MAGIC NUMBER

const StyledGatsbyImage = styled(GatsbyImage)``

const StyledCard = styled(Card)`
	background: ${props => props.theme.yellow};
	display: flex;
	align-items: center;
	transition: background 0.2s;
	h3 {
		position: absolute;
		width: 100%;
		text-align: center;
		color: ${props => props.theme.textOnYellow};
	}
	&:hover {
		background: ${props => props.theme.yellowHover};
	}
`
const MosaicBg = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	opacity: 0.15;
	filter: grayscale();
	mix-blend-mode: plus-darker;

	${StyledGatsbyImage} {
		flex: 0 1 calc(33% - 1em);
		margin: .5em;
	}
`

const FavoritesCarousel = (props) => {

	const data =  useStaticQuery(graphql`
		query FavoritesQuery { 
			allMdx(limit:6, filter: {fileAbsolutePath: {regex: "\\/content/favorites/"}},  sort: {fields: [frontmatter___date], order: DESC}) {
				nodes {
					body
					fields {
						slug
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
						subtitle
						type
						imageMargin
					}
				}
			}
			allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, absolutePath: {regex: "\\/content/favorites/"}}) {
				nodes {
					name
					childImageSharp {
						gatsbyImageData(layout: FULL_WIDTH, aspectRatio:1, backgroundColor:"transparent", transformOptions:{fit:CONTAIN})
					}
				}
			}
		}
		`)

	const getImageForPost = (post) => data.allFile.nodes.filter(imgNode => post.fields.slug.includes(imgNode.name))
	
	return(
		<WidthBleeder >
			<CarouselProvider
			      naturalSlideWidth={400}
			      naturalSlideHeight={400}
			      totalSlides={data.allMdx.nodes.length + 1}
			      visibleSlides={1}
			      step={1}
			      isIntrinsicHeight={true}
			      lockOnWindowScroll={true}
			>
				<Slider className="carousel-slider-favorites" classNameTray="carousel-tray-favorites">
					{data.allMdx.nodes.map((post, index) => (
						<Slide key={index} index={index}>
							<FavoritePostCard post={post} coverImage={getImageForPost(post)} />
						</Slide>
					))}
					<Slide key={6} index={6}>
					      <Link to="/favorites">
							<StyledCard>
								<MosaicBg className="bg">
									{data.allFile.nodes.map((img, index) => (
										<StyledGatsbyImage key={index} image={getImage(img)} alt={img.name} loading="eager"/>
									))}
								</MosaicBg>
								<h3>All favorites &rarr;</h3>
							</StyledCard>
						</Link>
					</Slide>
				</Slider>
			      <ButtonBack />
			      <ButtonNext />
			      <DotGroup showAsSelectedForCurrentSlideOnly={true} className="favorites-dot-group"/>
			</CarouselProvider>
		</WidthBleeder>
	)
}


export default FavoritesCarousel;