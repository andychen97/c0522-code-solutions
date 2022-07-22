import React from 'react';

export default class Accordion extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     tab: 0
  //   };
  //   this.handleClick = this.handleClick.bind(this);
  // }

  // handleClick() {

  // }

  render() {
    const languages = [
      { name: 'Hypertext Markup Language', description: 'Hypertext Markup Language (HTML) is the standard markup Language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.' },
      { name: 'Cascading Style Sheet', description: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.' },
      { name: 'JavaScript', description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification.JavaScript has curly- bracket syntax, dynamic typing, prototype - based object - orientation and first class functions.' }
    ];
    const listedItems = languages.map(({ name, description }) => {
      return (
        <li key={name}>
          <div className='row'>
            <div className='box'>
              <h3>{name}</h3>
            </div>
          </div>
          <div className='row'>
            <div className="descript-box">
              <p>{description}</p>
            </div>
          </div>
        </li>
      );
    });
    return (
      <ul>{listedItems}</ul>
    );
  }
}
