import PostPreview from "PostPreview"

const ThingPostPreview extends PostPreview  {
  let coverImage, postType;
  
  if (post.frontmatter.coverImage) {
    coverImage = post.frontmatter.coverImage.childImageSharp;
  }

  return (
    <Container className={className}>
      <StyledLink to={post.fields.slug}>
        {coverImage ? 
          <Img 
            fluid={{ ...coverImage.fluid, aspectRatio: aspectRatio }} 
            imgStyle={{ 
              objectFit: "contain", 
              objectPosition: "top center", 
              minHeight:'100%', 
              padding: post.frontmatter.imagePadding + '%' 
            }}
          /> 
        : <ImagePlaceholder />}
        <TextContainer>
          <h3 style={{marginBottom:0}}>{post.frontmatter.title}</h3>
          <Category className="inputFont">{post.frontmatter.category || post.frontmatter.author || post.frontmatter.artist}</Category>
          <p>{post.excerpt}</p>
        </TextContainer>
      </StyledLink>
    </Container>
  )
}

export default PostPreview