import React from 'react'
import Field from './field'

class EducationField extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { deleteItem } = this.props
    return (
      <div className="education">
        <div>
          <Field defaultText="University of something" />
        </div>
        <div>
          <Field defaultText="2000-2009" />
        </div>
        <div>
          <Field defaultText="Introduction to some stuff" />
        </div>
        <h5 onClick={deleteItem}>Delete</h5>
      </div>
    )
  }
}

export default EducationField
