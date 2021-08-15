import React from 'react';
import './TopNav.css';
import { Link } from "react-router-dom";

const TopNav = () => {

    return (
        <div>
            <nav class="navbar navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Nubian Hair Style</a>
                    <div className="main-menu">
                        <div><Link to="Login" className="signIn">SIGN IN/SIGN UP</Link></div>
                        <div><Link to="Login" className="signIn">FAVOURITES</Link></div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TopNav 