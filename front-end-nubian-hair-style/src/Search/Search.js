import React from 'react';
import NavBar from '../NavBar/NavBar';
import SubNav from '../NavBar/SubNav/SubNav';
import SearchResults from './SearchResults/SearchResults';
import SearchResultsSummary from './SearchResultsSummary/SearchResultsSummary';


const Search = () => {

    return (
        <div>
            <NavBar/>
            <SubNav/>
            <SearchResultsSummary/>
            <SearchResults/>
        </div>
    );
}

export default Search