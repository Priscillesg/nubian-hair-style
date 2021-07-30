import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchSuggestions from './SearchSuggestions/SearchSuggestions';
import TopNav from './TopNav/TopNav';
import './LandinPage.css';
import { useHistory } from "react-router-dom";

const LandingPage= () => {

    let history = useHistory();

    function search(term, location) {
        const urlEncodedTerm = encodeURI(term);
        const urlEncodedLocation = encodeURI(location);
        history.push(
        `/search?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`
        );
      }

    return (


        <div className='landing'>
            <div className='search-area'>
                <TopNav/>
                <SearchBar search= {search}/>
                <SearchSuggestions/>
            </div>
        </div>

    );
}

export default LandingPage