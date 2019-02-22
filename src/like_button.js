'use strict'

const e = React.createElement

class LikeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liked: false }
  }

  render() {
    if (this.state.liked) {
      return (
        <div>
          <p>You liked this.</p>
          <p>Wooooo!</p>
        </div>
      )
    }

    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like Me!!'
    )
  }
}

const domContainer = document.querySelector('#like_button_container')
ReactDOM.render(e(LikeButton), domContainer)