'use strict';

const createElement = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  handleClick() {
    this.setState({ liked: true })
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return createElement(
      'button',
      { onClick: () => this.handleClick() },
      'Like in React!'
    );
  }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(createElement(LikeButton), domContainer);