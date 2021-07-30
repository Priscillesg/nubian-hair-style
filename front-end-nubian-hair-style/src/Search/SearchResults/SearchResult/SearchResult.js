import React from 'react';
import './SearchResult.css'
import BusinessRating from '../../../BusinessRating/BusinessRating';

const SearchResult = () => {
    return (
        <div className='search-result'>
            <img src='' alt='business-img' placeholder='https://via.placeholder.com/150' className='business-image'/>
            <div className='business-info'>
                <h2 className='subtitle'>Burger info</h2>
                <BusinessRating/>
                <p>$<span className='tag'>Burger</span></p>

            </div>
            <div className='contact-info'>
                <p>+83225043576</p>
                <p>Example street</p>
                <p>77056</p>
            </div>
        </div>
    );
}

export default SearchResult;