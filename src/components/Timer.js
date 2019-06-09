import React from 'react';

export default class Timer extends React.Component {
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
    const { render: Render, ...rest } = this.props;
    const { ticks } = this.state;
    return (
      <Render {...rest} ticks={ticks}/>
    );
  }
}
