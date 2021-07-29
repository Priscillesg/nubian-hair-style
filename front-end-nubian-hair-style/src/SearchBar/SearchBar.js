import React, {useState} from 'react';
import './SearchBar.css'


const SearchBar = (props) => {
    return (
        <div>
            <div className='container'>
                <p>
                    <button>Search</button>
                </p>
                <p>
                    <input type="text" className = "input" id="salons" placeholder = "Salons"/>
                </p>
                <p>
                <button>Near</button>
                </p>
                <p>
                    <input type="text" className = "input" id="Where" placeholder = "Where"/>
                </p>
                <p>
                    <button>Another search</button>
                </p>
            </div>
        </div>
    );

}


export default SearchBar