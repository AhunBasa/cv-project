import React, { Component } from 'react'
import './styles/index.css'
import GeneralInfo from './components/generalInfo'
import Profile from './components/profile'
import Education from './components/education'

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
      </div>
    )
  }
}

export default App
