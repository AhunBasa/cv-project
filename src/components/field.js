import React from 'react'
import Input from './input'
import Output from './output'

class Field extends React.Component {
  constructor(props) {
    super(props)

    this.toggleMode = this.toggleMode.bind(this)
    this.setText = this.setText.bind(this)
    this.handleInput = this.handleInput.bind(this)

    this.state = {
      //input mode = true, display mode = false
      mode: false,
      text: this.props.defaultText,
    }
  }

  toggleMode() {
    this.setState((prevState) => ({
      mode: !prevState.mode,
    }))
  }

  setText(text) {
    this.setState({
      text: text,
    })
  }

  handleInput(e) {
    this.setText(e.target.value)
    this.toggleMode()
  }

  render() {
    return this.state.mode ? (
      <Input handleInput={this.handleInput} defaultValue={this.state.text} />
    ) : (
      <Output text={this.state.text} handleClick={this.toggleMode} />
    )
  }
}

export default Field
