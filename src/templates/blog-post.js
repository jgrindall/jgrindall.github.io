import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'
import { Fade } from 'react-slideshow-image';
import '../pages/App.css';
import './Post.css';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    return (
      <div className={'post color-' + post.frontmatter.color} style={{clear:"both" ,"marginTop":"30px"}}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>

        {post.frontmatter.thumbnails2 && post.frontmatter.thumbnails2.length >= 1 &&
        <Fade
          images={post.frontmatter.thumbnails2 || []}
          duration={5000}
          transitionDuration={500}
        />
        }

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
        color,
        thumbnail
      }
    }
  }
`
