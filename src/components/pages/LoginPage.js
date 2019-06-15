import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm';


export default class LoginPage extends Component {

    submit = data => {
        console.log(data);
    }

    render() {
        return (
            <section className="conteiner">

    {/* <div className="alert alert-danger">
      Invalid Credentials
    </div> */}

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
