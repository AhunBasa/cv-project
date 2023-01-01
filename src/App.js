import React, { Component } from 'react'
import './styles/index.css'
import GeneralInfo from './components/generalInfo'
import Profile from './components/profile'
import Education from './components/education'
import Work from './components/work'

class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="container">
        <GeneralInfo />
        <Profile />
        <Education />
        <Work />
      </div>
    )
  }
}

export default App
