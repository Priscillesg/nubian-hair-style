import React from 'react';
import './TopNav.css';

const TopNav = () => {

    return (
        <div>
            <nav className="nav">
                <div className="topnav-container">
                    <h1 className="logo"><a href="/">Nubian Hair Style</a></h1>
                    <div classNameName="main-menu">
                        {/* <Link to="Login">SIGN IN/SIGN UP</Link>
                        <Link to="favouritesList">FAVOURITES</Link> */}
                        <button type="button" classNameName="btn-topnav">Log Out</button>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default TopNav 