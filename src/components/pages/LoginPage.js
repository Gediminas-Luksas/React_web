import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LoginForm from '../forms/LoginForm';
import { login } from '../../actions/auth';


class LoginPage extends React.Component {
submit = data => this.props.login(data).then(() => this.props.history.push("/posts"));

    render() {
        return (
            <section className="conteiner">

    <h1 className="large text-primary">
      Sign In
    </h1>
    <p className="lead"><i className="fas fa-user"></i>
      Sign Into your account
    </p>
    
    <LoginForm submit={this.submit} />

    <p className="my-1">
      Don`t have an account? <a href="register.html">Sign Up</a>
    </p>
  </section>
        )
    }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
      push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired
};

export default connect(null, { login })(LoginPage);