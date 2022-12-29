import React, { Component } from 'react'
import './styles/index.css'
import GeneralInfo from './components/generalInfo'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">
        <GeneralInfo />
      </div>
    )
  }
}

export default App
