import React from 'react';
import './TopNav.css';

const TopNav = () => {

    return (
        <div className='container-topnav'>
            <div className='container-reviews'>
                <span>Write a Review</span>
                <span>Events</span>
            </div>
            
            <div className='container-login'>
                <span>Login</span>
                <button className='button'>Sign up</button>
            </div>


        </div>
    );
}

export default TopNav 