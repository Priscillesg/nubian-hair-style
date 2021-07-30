import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            {/* Add logo */}
            <SearchBar/>
            <button className='nav-button'>Sign In</button>
            <button className='nav-button'>Sign Up</button>
        </div>
    )
}

export default NavBar