import React from 'react'
import TopNav from '../LandingPage/TopNav/TopNav';
import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className='nav-bar'>
            {/* Add logo */}
            <TopNav/>
            <SearchBar
            term = {props.term}
            location = {props.location}
            search = {props.search}
            />
            {/* <button className='nav-button'>Sign In</button>
            <button className='nav-button'>Sign Up</button> */}
        </div>
    )
}

export default NavBar