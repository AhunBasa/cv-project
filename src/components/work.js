import React from 'react'
import uniqid from 'uniqid'
import WorkElement from './workElement'

class Work extends React.Component {
  constructor() {
    super()

    this.addItem = this.addItem.bind(this)
    this.setProperty = this.setProperty.bind(this)

    this.state = {
      item: {
        id: uniqid(),
        company: 'Company',
        position: 'Position',
        years: 'Years',
        description: 'Description',
      },
      items: [
        {
          id: uniqid(),
          company: 'Coca-Cola',
          position: 'Operator',
          years: '2010-2014',
          description: 'Did some work',
        },
      ],
    }
  }

  addItem() {
    this.setState((prevState) => ({
      items: [...prevState.items, this.state.item],
      item: {
        id: uniqid(),
        company: 'Company',
        position: 'Position',
        years: 'Years',
        description: 'Description',
      },
    }))
  }

  deleteItem(key) {
    this.setState((prevState) => ({
      items: prevState.items.filter((el) => el.id != key),
    }))
  }

  setProperty(newProperty, id) {
    this.setState({
      item: {
        ...this.state.item,
        ...newProperty,
      },
    })
  }

  render() {
    const { item, items } = this.state
    return (
      <div className="work">
        <h3>WORK EXPERIENCE</h3>
        {items.map((el) => (
          <WorkElement
            key={el.id}
            element={el}
            handleInput={this.setProperty}
            delete={this.deleteItem.bind(this, el.id)}
          />
        ))}
        <div onClick={this.addItem}>Add</div>
      </div>
    )
  }
}

export default Work
