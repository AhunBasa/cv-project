import React from 'react'

class WorkField extends React.Component {
  constructor(props) {
    super(props)

    this.toggleMode = this.toggleMode.bind(this)
    this.handleBlur = this.handleBlur.bind(this)

    this.state = {
      displayMode: true,
    }
  }

  toggleMode() {
    this.setState({
      displayMode: !this.state.displayMode,
    })
  }

  handleBlur(e) {
    const { name, dataKey } = this.props
    this.toggleMode()
    console.log(dataKey, name, e.target.value)
    this.props.handleInput({ [name]: e.target.value }, dataKey)
  }

  render() {
    const { name, text } = this.props
    const { displayMode } = this.state
    return displayMode ? (
      <div className={name} onClick={this.toggleMode}>
        {text}
      </div>
    ) : (
      <input
        type="text"
        defaultValue={text}
        // onChange={this.props.handleInput}
        onBlur={this.handleBlur}
      />
    )
  }
}

export default WorkField
