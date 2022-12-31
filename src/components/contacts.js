import React from 'react'
import Field from './field'
import { ReactComponent as MailLogo } from '../icons/mail.svg'
import { ReactComponent as TelephoneLogo } from '../icons/telephone.svg'
import { ReactComponent as AddressLogo } from '../icons/address.svg'
import { ReactComponent as LinkedinLogo } from '../icons/linkedin.svg'

class Contacts extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div className="contacts">
        <div>
          <TelephoneLogo
            className="
          logo"
          />
          <Field defaultText="(222)222-22222" />
        </div>
        <div>
          <MailLogo className="logo" />
          <Field defaultText="name@email.com" />
        </div>
        <div>
          <LinkedinLogo className="logo" />
          <Field defaultText="linkedin.com" />
        </div>
        <div>
          <AddressLogo className="logo" />
          <Field defaultText="Haifa, Israel" />
        </div>
      </div>
    )
  }
}

export default Contacts
