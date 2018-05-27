import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: "42rem",
          padding: "2.625rem 1.3125rem",
        }}
      >
        <h1>
          <Link>
            Gatsby Starter Blog
          </Link>
        </h1>
        {children()}
      </div>
    )
  }
}

export default Template
