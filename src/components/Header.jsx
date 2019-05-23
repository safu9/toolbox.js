import React from 'react'
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <div id="header-content">
          <h1>
            <Link to="/">toolbox.js</Link>
          </h1>
        </div>
      </header>
    )
  }
}

export default Header
