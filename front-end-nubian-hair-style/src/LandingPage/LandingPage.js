import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import TopNav from './TopNav/TopNav';
import './LandinPage.css';
import { useHistory } from "react-router-dom";
import Section from '../Section/Section';
import Image1 from "../images/park-street-KYUiTYOaE9M-unsplash.jpg";
import './LandinPage.css';
import BottomNav from './BottomNav/BottomNav';



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
            <TopNav/>
            <p className="p-land">Discover black hair salon near you</p>
            <video src="/videos/pexels-kampus-production-6940184.mp4" autoPlay loop muted id="video"></video>
            <SearchBar search= {search}/>
            <BottomNav/>
          
        </div>
        
        

    );
}

export default LandingPage