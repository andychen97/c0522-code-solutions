import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(table) {

  }

  render() {
    const tab = this.state.tab;
    const handleClick = this.handleClick;
    let view;
    if (tab === 0) {
      view = 'hidden';
    }
    return (
      <div className='container'>
        <div className='row'>
          <div className='box' onClick={handleClick}>
            <h3>Hypertext Markup Language</h3>
          </div>
        </div>
        <div className='row'>
          <div className={`descript-box ${view}`}>
            <p>Hypertext Markup Language (HTML) is the standard markup Language
              for creating web pages and web applications. With Cascading Style
              Sheets (CSS) and JavaScript, it forms a triad of cornerstone
              technologies for the World Wide Web.</p>
          </div>
        </div>
        <div className='row'>
          <div className='box' onClick={handleClick}>
            <h3>Cascading Style Sheet</h3>
          </div>
        </div>
        <div className='row'>
          <div className={`descript-box ${view}`}>
            <p>Cascading Style Sheets (CSS) is a style sheet language used for
              describing the presentation of a document written in a markup
              language like HTML. CSS is a cornerstone technology of the World
              Wide Web alongside HTML and JavaScript</p>
          </div>
        </div>
        <div className='row'>
          <div className='box' onClick={handleClick}>
            <h3>JavaScript</h3>
          </div>
        </div>
        <div className='row'>
          <div className={`descript-box ${view}`}>
            <p>JavaScript, often abbreviated as JS, is a high-level,
              nterpreted programming language that conforms to the ECMAScript
              specification. JavaScript has curly-bracket syntax, dynamic
              typing, prototype-based object-orientation and first class
              functions.</p>
          </div>
        </div>
      </div>
    );
  }
}
