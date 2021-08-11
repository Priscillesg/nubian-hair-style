import React from 'react';
import './BusinessRating.css'
import Rating from 'react-rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// const emptySymbol = <FontAwesomeIcon icon="fa fa-star" />
// const fullSymbol = <FontAwesomeIcon icon="fas fa-star"/>


const BusinessRating = (props) => {
    return (
        <div className='rating'>
            <Rating
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
       

            fractions={2}
            readonly
            initialRating={props.rating}
            />
            <p>{props.reviewCount}</p>

            

        </div>
    );
}

export default BusinessRating;