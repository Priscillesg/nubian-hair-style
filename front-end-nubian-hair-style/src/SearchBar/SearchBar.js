import React, {useState} from 'react';
import './SearchBar.css'
import { BsSearch } from "react-icons/bs";
// import Image1 from "../images/afro-hair.png";

const SearchBar = (props) => {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    const submit = (event) => {
        event.preventDefault();
        if(typeof props.search === 'function') {
            props.search(term, location);
        }

        };






    return (
        
            <div>
                {/* <div className='w-full h-64 bg-blue bg-cover'> */}
                <form onSubmit={submit}>
                <div className="container-form">
                    <p className="form input-icons">
                        <input type="text" className = "input" id="salons" placeholder = "Salons" value={term} onChange ={(e)=>setTerm(e.target.value)}/>
                    </p>
                    <p className="form input-icons">
                        <input type="text" className = "input" id="Where" placeholder = "Where" value={location} onChange ={(e)=>setLocation(e.target.value)}/>
                    </p>
                    <p>
                        <button onClick={submit} className="btn btn-primary"><BsSearch className="ikon"/></button>
                    </p>
                </div>
                </form>
                {/* </div> */}
            </div>
       

    );

}


export default SearchBar