import React from 'react';

export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ticks: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        ticks: this.state.ticks + 1
      })
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { ticks } = this.state;
    const disabled = ticks < 5;
    return (
      <button disabled={disabled}>
        {
          disabled
            ? `Click me after ${ 5 - ticks } seconds`
            : 'Click me'
        }
      </button>
    );
  }
}
