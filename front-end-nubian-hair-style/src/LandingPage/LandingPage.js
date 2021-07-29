import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchSuggestions from './SearchSuggestions/SearchSuggestions';
import TopNav from './TopNav/TopNav';

const LandingPage= () => {

    return (
        <div>
            <TopNav/>
            <SearchBar/>
            <SearchSuggestions/>
        </div>
    );
}

export default LandingPage