import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar bg-dark">
                <h1>
                <i className="fas fa-code"></i>
                <Link to="/">Fifa 2019 World Cup</Link>
                </h1>
                    <ul>
                        <li><a href="profiles.html">Developers</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
            </nav>
        )
    }
}
