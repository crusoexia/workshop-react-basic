import React from 'react';

const withTimer = (Component) => {
  return class extends React.Component {
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
      return (
        <Component {...this.props} ticks={ticks}/>
      );
    }
  }
}

export default withTimer;
