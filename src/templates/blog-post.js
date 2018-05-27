import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Fade } from 'react-slideshow-image';

const IMAGES = [
  'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg',
  'https://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
  'https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg'
];

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <Fade
          images={post.frontmatter.thumbnails2 || IMAGES}
          duration={2500}
          transitionDuration={500}
        />
        <p>t2 {post.frontmatter.thumbnails2}</p>
        <p
          style={{
            display: 'block'
          }}
        >
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title,
        thumbnails2,
        thumbnail
      }
    }
  }
`
