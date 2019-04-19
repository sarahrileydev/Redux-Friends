import React from 'react';
import { connect } from 'react-redux';


import { login } from '../actions/login';

class Login extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials)
    .then(() => 
      this.props.history.push('/protected'));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button>
          Login
          </button>
        </form>
        {this.props.error && <p className="error">{this.props.error}</p>}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     loggingIn: state.loggingIn
//   }
// }

//same as:
const mapStateToProps = ({ loggingIn, error }) => ({
  error,
  loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);