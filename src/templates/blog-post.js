import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Fade } from 'react-slideshow-image';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    console.log(this.props);
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <div style={{clear:"both"}}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <Fade
          images={post.frontmatter.thumbnails2 || []}
          duration={2500}
          transitionDuration={500}
        />
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
