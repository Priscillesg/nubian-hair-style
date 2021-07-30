import React from 'react';
import SearchResult from './SearchResult/SearchResult';
import './SearchResults.css'

const SearchResults = () => {
    return (
        <div className='search-results'>
            <SearchResult/>
            <SearchResult/>
        </div>
    );
}

export default SearchResults;