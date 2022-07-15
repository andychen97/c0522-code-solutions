import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    const value = event.target.value;
    this.setState({ username: value });
  }

  handlePasswordChange(event) {
    const value = event.target.value;
    this.setState({ password: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="signup-username">Username</label>
        <input name="usename" type="text" id="signup-username" value={this.state.username} onChange={this.handleUsernameChange} />
        <label htmlFor="signup-username">Password</label>
        <input name="password" type="password" id="signup-password" value={this.state.password} onChange={this.handlePasswordChange} />
        <button>Sign Up</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
