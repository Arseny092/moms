import React from 'react'
import Link from 'gatsby-link'
import Menu from "../menu/menu";
import '../header/header.css'

const Header = ({ siteTitle }) => (
  <div>
    <div className="header-container"
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
        <Menu/>
    </div>
  </div>
)

export default Header
