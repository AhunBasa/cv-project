import React from 'react'

class Output extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { text } = this.props
    return <div onClick={this.props.handleClick}>{text}</div>
  }
}

export default Output
