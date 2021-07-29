import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchSuggestions from './SearchSuggestions/SearchSuggestions';
import TopNav from './TopNav/TopNav';
import './LandinPage.css'

const LandingPage= () => {

    return (

        <div className='landing'>
            <div className='search-area'>
                <TopNav/>
                <SearchBar/>
                <SearchSuggestions/>
            </div>
        </div>

    );
}

export default LandingPage