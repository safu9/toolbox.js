import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main id="main">
          <div id="main-content">
            <Route path="/" exact component={Home} />
          </div>
        </main>
        <Footer />
      </BrowserRouter>
    )
  }
}

render(<App />, document.getElementById('app'))
