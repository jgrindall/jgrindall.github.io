import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              textDecoration:'none',
              backgroundImage:'none',
              color:'#7e7777'
            }}
            to={'/'}
          >
            John Grindall
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
              color:'#7e7777',
              textDecoration:'none',
              backgroundImage:'none'
            }}
            to={'/'}
          >
            &lt;&nbsp;&nbsp;Home
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: "42rem",
          padding: "2.625rem 1.3125rem",
        }}
      >
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
