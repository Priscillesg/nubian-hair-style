import React, {useState} from 'react';
import './SearchBar.css'


const SearchBar = (props) => {
    const [term, setTerm] = useState(props.term || '');
    const [location, setLocation] = useState(props.location || '');

    const submit = (e) => {
        e.preventDefault();
        if(typeof props.search === 'function') {
            props.search(term, location);
        }
        console.log(term, location);
        e.preventDefault();

        };






    return (
        <form onSubmit={submit}>
            <div>
                <div className='container'>
                    <p>
                        <button>Search</button>
                    </p>
                    <p>
                        <input type="text" className = "input" id="salons" placeholder = "Salons" onChange ={(e)=>setTerm(e.target.value)}/>
                    </p>
                    <p>
                    <button>Near</button>
                    </p>
                    <p>
                        <input type="text" className = "input" id="Where" placeholder = "Where" onChange ={(e)=>setLocation(e.target.value)}/>
                    </p>
                    <p>
                        <button onClick={submit}>Search Icon</button>
                    </p>
                </div>
            </div>
        </form>

    );

}


export default SearchBar