import React from 'react';
import './SearchResult.css'
import BusinessRating from '../../../BusinessRating/BusinessRating';
import { Link } from "react-router-dom";

const SearchResult = (props) => {
    
    const b = props.business;

    if (!b) {
        return (<div/>);
    }
   
    const tags = b.categories.map(category => (<span className='business-tag' key={b.id + category.title}>{category.title}</span>));
    const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>);

    return (
        <div className='search-result'>
            <Link to={`/api_list/${b.id}`}>
            <div>
            <img src={b.image_url} alt='business-img' placeholder='https://via.placeholder.com/150' className='business-image'/>
            </div>
            </Link>
            <div className='business-info'>
            <a href={b.id} className='subtitle'><h2 className='subtitle'>{b.name}</h2></a>
                <BusinessRating reviewCount={b.review_count}/>
                <p>{b.price} {tags}</p>

            </div>
            <div className='contact-info'>
                <p>{b.phone}</p>
                {addressLines}
            </div>
            <Link to={`/api_list/${b.id}`} className="bg-blue-500 text-white p-2 flex justify-center w-full" >VIEW</Link>
        </div>
    );
}

export default SearchResult;