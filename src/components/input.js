import React from 'react'

class Input extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { defaultValue, handleInput } = this.props
    return (
      <div>
        <input
          type="text"
          autoFocus
          defaultValue={defaultValue}
          onBlur={handleInput}
        ></input>
      </div>
    )
  }
}

export default Input
