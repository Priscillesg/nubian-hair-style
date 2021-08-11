import React from 'react'
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className='nav-bar'>
            {/* Add logo */}
            <SearchBar
            term = {props.term}
            location = {props.location}
            search = {props.search}
            />
            <button className='nav-button'>Sign In</button>
            <button className='nav-button'>Sign Up</button>
        </div>
    )
}

export default NavBar