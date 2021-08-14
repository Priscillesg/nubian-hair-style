import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TopNav from './TopNav/TopNav';
import './LandinPage.css';
import { useHistory } from "react-router-dom";
import Section from '../Section/Section';
import Image1 from "../images/park-street-KYUiTYOaE9M-unsplash.jpg";
import './LandinPage.css';



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
            <div className="homepage-hero">
                <TopNav/>
                <div className="bg-cover">
                    <h1 className="heading">Discover Black Hair Salons<br/><span className="line-break">Near You</span></h1>
                </div>
                
                <SearchBar search= {search}/>
                <Section/>
            </div>
        </div>

    );
}

export default LandingPage