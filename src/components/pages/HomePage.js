import React, { Component } from 'react';
import { Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large">FIFA world cup</h1>
                        <p className="lead">Create gamer profile, share
					posts and get help from other players
                        </p>
                        <div className="buttons">
                            <Link className="btn btn-primary" to="/register">Sign Up</Link>
                            <Link className="btn" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default HomePage;
