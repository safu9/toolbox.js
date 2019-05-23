import React from 'react'
import {render} from 'react-dom'

import Header from './components/Header'
import Footer from './components/Footer'

class App extends React.Component {
  render () {
    return (
      <div>
        <Header/>
        <main id="main">
          <div id="main-content">
            <p>Hello, toolbox.js!</p>
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))
