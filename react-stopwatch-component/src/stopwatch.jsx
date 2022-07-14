import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      switch: false,
      src: '../images/play.png'
    };
    this.clock = this.clock.bind(this);
    this.reset = this.reset.bind(this);
  }

  clock() {
    if (!this.state.switch) {
      this.setState({
        switch: true,
        src: '../images/pause.png'
      });
      this.timer = setInterval(() => {
        this.setState({ time: this.state.time + 1 });
      }, 1000);
    } else if (this.state.switch) {
      this.setState({
        switch: false,
        src: '../images/play.png'
      });
      clearInterval(this.timer);
    }
  }

  reset() {
    if (this.state.switch === false) {
      this.setState({ time: 0 });
    }
  }

  render() {
    return (
      <div>
        <div className='circle' onClick={this.reset}>
          <h1 className='number'>{this.state.time}</h1>
        </div>
        <img src={this.state.src} className='images' onClick={this.clock}/>
      </div>
    );
  }
}
