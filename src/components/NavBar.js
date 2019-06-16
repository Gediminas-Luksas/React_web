import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

const NavBar = ({ isAuthenticated, logout }) => (
            <nav className="navbar bg-dark">
                <h1>
                <i className="fas fa-code"></i>
                <Link to="/">Fifa 2019 World Cup</Link>
                </h1>
                    <ul>
                        <li><Link to="posts">Users Posts</Link></li>
                        <li><Link to="register">Register</Link></li>
                        <li>{ isAuthenticated ? (
                            <Link to="/" onClick={() => logout()}>Logout</Link> 
                        ) : ( 
                            <Link to="/login">Login</Link> 
                        )}</li>
                    </ul>
            </nav>
);


NavBar.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
}

function mapStateToProps(state){
    return {
        isAuthenticated: !!state.user.token
    }
}

export default connect(mapStateToProps, { logout: actions.logout })(NavBar);