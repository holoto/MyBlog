import React from 'react'
import { Link } from 'gatsby'

import { rhythm } from '../utils/typography'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    // eslint-disable-next-line no-undef
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {' '}
            {title}{' '}
          </Link>{' '}
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Montserrat, sans-serif',
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            {' '}
            {title}{' '}
          </Link>{' '}
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(36),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header> {header} </header> <main> {children} </main>{' '}
        <footer>
          {' '}
          ©{new Date().getFullYear()}, Write by{' '}
          <a href="https://github.com/holoto"> holoto </a>{' '}
        </footer>{' '}
      </div>
    )
  }
}

export default Layout
