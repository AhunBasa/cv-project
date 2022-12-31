import React from 'react'

class Profile extends React.Component {
  constructor() {
    super()

    this.handleChange = this.handleChange.bind(this)
    this.toggleMode = this.toggleMode.bind(this)

    this.state = {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate incidunt assumenda minus doloribus aut in accusamus labore officiis repellendus perspiciatis, saepe vero ad nostrum sapiente blanditiis eligendi doloremque, aliquid cum laudantium impedit dolorum architecto, error magnam. Quae dolore officia, enim iure recusandae error ratione et reprehenderit quis sequi voluptates doloribus, similique, maxime harum. Nisi eveniet exercitationem quasi, mollitia quod quis laboriosam dicta rem quas voluptas expedita molestias magnam corporis sunt obcaecati tenetur doloremque quos natus delectus minima? Exercitationem nobis dolorum ratione assumenda veniam nesciunt.',
      //input mode = true, display mode = false
      mode: false,
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value,
    })
  }

  toggleMode() {
    this.setState({
      mode: !this.state.mode,
    })
  }

  render() {
    const { text } = this.state
    return (
      <div className="profile">
        <h3>Profile</h3>
        {this.state.mode ? (
          <textarea
            autoFocus
            value={text}
            raws="10"
            onChange={this.handleChange}
            onBlur={this.toggleMode}
          />
        ) : (
          <p onClick={this.toggleMode}>{text}</p>
        )}
      </div>
    )
  }
}

export default Profile
