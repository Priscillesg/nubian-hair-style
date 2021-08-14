import React,{useState, useEffect} from 'react';
import './SearchResult.css'
import { Link , useParams} from "react-router-dom";
import Rating from 'front10-rating';

const SearchResult = (props) => {
    
    const b = props.business;

    if (!b) {
        return (<div/>);
    }

    // const [reviews, setReviews] = useState([])
   
    // const { business_id } = useParams();
    // const business_id = b.id
    // const [token] = useCookies(['mytoken'])


    // let history = useHistory()

    // useEffect (()=>{
        // const abortController = new AbortController();
        // const signal = abortController.signal

        // fetch(`http://127.0.0.1:8000/api_list/${b.id}/reviews`, {
        //     'method':'GET',
        //     headers: {
        //       'Content-Type':'application/json',
        //     //   'Authorization':`Token ${token['mytoken']}`
        //       'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
        //     }
        // })
        // .then(resp => resp.json())
        // .then(resp => {setReviews(resp);
        //     console.log(resp)
        // })
        // .catch(error => console.log(error));
        // // return function cleanup() {
        // //     abortController.abort();
        // //   };
        
    // },[b.id])

    // console.log(reviews)

    // const review = reviews[0].text
   
    // const tags = b.categories.map(category => (<span className='business-tag' key={b.id + category.title}>{category.title}</span>));
    // const addressLines = b.location.display_address.map(addressLine => <p key={b.id + addressLine}>{addressLine}</p>);

    return (
        // <div className='search-result'>
        //     <Link to={`/api_list/${b.id}`}>
        //     <div>
        //     <img src={b.image_url} alt='business-img' placeholder='https://via.placeholder.com/150' className='business-image'/>
        //     </div>
        //     </Link>
        //     <div className='business-info'>
        //     <a href={b.id} className='subtitle'><h2 className='subtitle'>{b.name}</h2></a>
        //         <BusinessRating reviewCount={b.review_count}/>
        //         <p>{b.price} {tags}</p>

        //     </div>
        //     <div className='contact-info'>
        //         <p>{b.phone}</p>
        //         {addressLines}
        //     </div>
        //     <Link to={`/api_list/${b.id}`} className="bg-blue-500 text-white p-2 flex justify-center w-full" >VIEW</Link>
        // </div>

        <div className="results">
            <div className="card mb-3" styles="max-width: 540px;">
                <div className="search-result">
                <Link to={`/api_list/${b.id}`}>
                    <img src={b.image_url} className='business-image' alt="..."/>
                </Link>
                    <div className="business-info">
                        <h5 className="mt-0">{b.name}</h5>
                        <Rating value={b.rating} />
                        <p>{b.review_count} reviews</p>
                        <p className="categories">{b.categories.map(category => {return <span className='business-tag' key={b.id}>{category["title"]}</span>})}</p>
                        <p>{b.location.display_address}<span className="hidden">This is some placeholder content for the custom component</span></p>
                        <a href={b.url} className="stretched-link"><button type="button" className="btn btn-secondary btn-results">View Website</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchResult;