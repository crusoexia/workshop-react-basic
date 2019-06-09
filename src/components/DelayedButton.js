import React from 'react';

export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabled: true
    };
  }

  componentDidMount() {
    let tickCount = 0;
    this.interval = setInterval(() => {
      this.setState({
        disabled: ++tickCount < 5
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { disabled } = this.state;
    return (
      <button disabled={disabled}>Click me after 5 seconds</button>
    );
  }
}
