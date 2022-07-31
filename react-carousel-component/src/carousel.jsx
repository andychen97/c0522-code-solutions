import React from 'react';
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex: 0
    };
    this.rightClick = this.rightClick.bind(this);
  }

  componentDidMount() {
    setInterval(
      () => this.setState(
        { imageIndex: (this.state.imageIndex === this.props.images.length - 1) ? 0 : this.state.imageIndex + 1 }), 3000);
  }

  rightClick() {
    this.setState(prev => ({
      imageIndex: prev.imageIndex + 1
    }));
  }

  // leftClick() {
  //   this.setState();
  // }

  // indexClick() {
  //   this.setState();
  // }

  render() {
    return (
      <div className='images-box'>
        <div className='row space-between align-center'>
          <i className="fa-solid fa-2xl fa-angle-left arrows" onClick={this.leftClick} />
          <img src={`../images/${this.images}`} className='images' />
          <i className="fa-solid fa-2xl fa-angle-right arrows" onClick={this.rightClick} />
        </div>
        <div className='row justify-center'>
          <i className="fa-solid fa-circle circles" />
          <i className="fa-regular fa-circle circles" />
          <i className="fa-regular fa-circle circles" />
          <i className="fa-regular fa-circle circles" />
          <i className="fa-regular fa-circle circles" />
        </div>
      </div>
    );
  }
}
