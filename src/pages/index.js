import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const thumbnail = get(node, 'frontmatter.thumbnail') || "www.images/image.png"
          return (
            <div key={node.fields.slug}>
              <h3>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>{title}</Link>
              </h3>
              <div style={{ clear:"both" }}>
                <img style={{ float:"left", margin:"10px" }} width="200px" src={thumbnail} />
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title,
            thumbnail,
            thumbnails2
          }
        }
      }
    }
  }
`
