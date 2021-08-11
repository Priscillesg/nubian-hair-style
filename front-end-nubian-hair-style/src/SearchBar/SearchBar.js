import React, {useState} from 'react';
import './SearchBar.css'


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
                <div className='w-full h-64 bg-blue bg-cover'>
                <form onSubmit={submit}>
                <div className="container-form">
                    {/* <p className="form input-icons">
                        <button>Search</button>
                    </p> */}
                    <p className="form input-icons">
                        <input type="text" className = "input" id="salons" placeholder = "Salons" value={term} onChange ={(e)=>setTerm(e.target.value)}/>
                    </p>
                    {/* <pclassName="form input-icons">
                    <button>Near</button>
                    </p> */}
                    <p className="form input-icons">
                        <input type="text" className = "input" id="Where" placeholder = "Where" value={location} onChange ={(e)=>setLocation(e.target.value)}/>
                    </p>
                    <p>
                        <button onClick={submit} className="btn btn-primary">Search Icon</button>
                    </p>
                </div>
                </form>
                </div>
            </div>
       

    );

}


export default SearchBar