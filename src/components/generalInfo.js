import React from 'react'
import Field from './field'
import Contacts from './contacts'

class GeneralInfo extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="general-info">
        <div className="name-profession">
          <div className="name">
            <Field defaultText="First Name Last Name" />
          </div>
          <div className="profession">
            <Field defaultText="Profession Unknown" />
          </div>
        </div>

        <Contacts />
      </div>
    )
  }
}

export default GeneralInfo
