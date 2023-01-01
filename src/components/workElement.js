import React from 'react'
import WorkField from './workField'

class WorkElement extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const arrayOfElements = Object.entries(this.props.element)
    const dataKey = arrayOfElements.shift()
    return (
      <div>
        {arrayOfElements.map((el, index) => (
          <WorkField
            key={index}
            name={el[0]}
            text={el[1]}
            dataKey={dataKey}
            handleInput={this.props.handleInput}
          />
        ))}
        <div onClick={this.props.delete}>Delete</div>
      </div>
    )
  }
}

export default WorkElement
