import React from 'react';
import './SearchResultsSummary.css'

const SearchResultsSummary = (props) => {

    let resultStats = null;
    if (props.amountResults && props.shownResults) {
        resultStats = <p>Showing 1-{props.shownResults} out of {props.amountResults} results</p>
    }
    return (
        <div className='container'>
            <div className='search-result'>
                <h1 className='subtitle'><strong>{props.term}</strong>{props.location}</h1>
                {resultStats}
            </div>

        </div>
    );
}

export default SearchResultsSummary;