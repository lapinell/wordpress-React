'use strict'

const e = React.createElement

class FormContact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '', // text input
      email: '', // email input
      message: '' // textarea input
    }
  }

  render() {
    return (
      <form method="" action="/">
        <input type="text"></input>
        <input type="text"></input>
        <textarea></textarea>
        <button type="submit">Send</button>
      </form>
    )
  }
}

const domContainer = document.querySelector('#contact_form_container')
ReactDOM.render(e(FormContact), domContainer)