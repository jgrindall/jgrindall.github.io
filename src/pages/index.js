import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Fade } from 'react-slideshow-image';
import './App.css';
import ipad1 from "../../static/img/logo/ss1.png";
import ipad2 from "../../static/img/simitri/ss2.png";
import ipad3 from "../../static/img/rtm/slide1.png";

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')
    const IMAGES = [
      ipad1,
      ipad2,
      ipad3
    ];

    return (
      <div>
        <Helmet title={siteTitle} />
        <Fade
          images={IMAGES}
          duration={7500}
          transitionDuration={1000}
        />
        {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          const thumbnail = get(node, 'frontmatter.thumbnail')
          const color = get(node, 'frontmatter.color')
          return (
            <div className={'excerpt color-' + color} style={{clear:"both"}} key={node.fields.slug}>
              <h3 style={{"marginTop":"4rem"}}>
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>{title}</Link>
              </h3>
              <div style={{ clear:"both" }}>
                <img style={{ float:"left", margin:"10px", "margin-bottom":"30px" }} width="200px" src={thumbnail} />
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
          excerpt(pruneLength: 225)
          fields {
            slug
          }
          frontmatter {
            title,
            thumbnail,
            thumbnails2,
            color
          }
        }
      }
    }
  }
`
