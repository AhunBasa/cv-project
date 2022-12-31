import React from 'react'
import EducationField from './educationField'
import uniqid from 'uniqid'

class Education extends React.Component {
  constructor() {
    super()

    this.addField = this.addField.bind(this)
    this.deleteItem = this.deleteItem.bind(this)

    this.state = {
      id: uniqid(),
      elements: [],
    }
  }

  addField() {
    this.setState({
      id: uniqid(),
      elements: [...this.state.elements, this.state.id],
    })
  }

  deleteItem(e) {
    this.setState((prevState) => ({
      elements: prevState.elements.filter((el) => el != e),
    }))
  }

  render() {
    const { elements } = this.state
    return (
      <div className="Education">
        <h3>Education</h3>
        {elements.map((element) => (
          <EducationField
            key={element}
            deleteItem={this.deleteItem.bind(this, element)}
          />
        ))}
        <div onClick={this.addField}>X</div>
      </div>
    )
  }
}

export default Education
