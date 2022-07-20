
import React from 'react';
export default class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    const password = this.state.value.length;
    if (password < 1) {
      return {
        xMark: '',
        cMark: 'hidden',
        noText: '',
        shortText: 'hidden'
      };
    } else if (password < 8) {
      return {
        xMark: '',
        cMark: 'hidden',
        noText: 'hidden',
        shortText: ''
      };
    } else {
      return {
        xMark: 'hidden',
        cMark: '',
        noText: 'hidden',
        shortText: 'hidden'
      };
    }
  }

  render() {
    const handleChange = this.handleChange;
    return (
      <div>
        <form onClick={this.handleClick}>
          <div>
            <label htmlFor='password'>Password</label>
          </div>
          <div>
            <input type='password' id='password' value={this.state.value} onChange={this.handleChange} name='password' />
            <i className={'fa-solid fa-xmark x-mark ' + `${handleChange.xMark}`} />
            <i className={'fa-solid fa-check check-mark ' + `${handleChange.cMark}`} />
          </div>
          <input type='submit' value='submit'></input>
        </form>
        <h6 className={'red-text ' + `${handleChange.noText}`}>A password is required.</h6>
        <h6 className={'red-text ' + `${handleChange.shortText}`}>Your password is too short.</h6>
      </div>
    );
  }
}
