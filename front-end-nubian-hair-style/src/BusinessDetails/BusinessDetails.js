import { yieldExpression } from 'babel-types';
// import { Carousel } from 'bootstrap';
import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import APIService from '../hooks/yelp-api/APIService';
import TopNav from '../LandingPage/TopNav/TopNav';
import CarouselContainer from '../CarouselContainer/CarouselContainer';
// import {GrFavorite} from "react-icons/gr"
// import {useCookies} from 'react-cookie';
import Rating from 'front10-rating';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomerReview from '../CustomerReview/CustomerReview';




const BusinessDetails = () => {

    const [businessDetail, setBusinessDetail] = useState({})
   

    const [favourites, setFavourites] = useState({})
    const { business_id } = useParams();
    const [pictures, setPictures] = useState([])
    // const [token] = useCookies(['mytoken'])


    // let history = useHistory()

    useEffect (()=>{
        // const abortController = new AbortController();
        // const signal = abortController.signal

        fetch(`http://127.0.0.1:8000/api_list/${business_id}`, {
            'method':'GET',
            headers: {
              'Content-Type':'application/json',
            //   'Authorization':`Token ${token['mytoken']}`
              'Authorization':`Token 164db5e00610c5a682f19e61ec0960f656de73b2` 
            }
        })
        .then(resp => resp.json())
        .then(resp => {
            setBusinessDetail(resp)
            setPictures(resp.photos)
            ;
        })
        .catch(error => console.log(error));
        // return function cleanup() {
        //     abortController.abort();
        //   };
        
    },[business_id])


    const onFavorites = () => {
        setFavourites({
            name: businessDetail.name,
            image_url: businessDetail.image_url,
            business_id: businessDetail.id
        })
    }

        useEffect(() => {
            APIService.SaveFavoris(favourites)
            .then(resp =>  console.log(resp))
            .catch(error =>console.log(error))
    
        }, [favourites]) 

    return (
        <div>
            <TopNav/>
                <CarouselContainer photos = {pictures}
                                    // second = {first} 
                                    // third = {first} 
                                    // fourth = {first} 
                                    onFavorites={onFavorites}
                                    name={businessDetail.name}
                                    rating={businessDetail.rating}
                                    review_count={businessDetail.review_count}>
                                    
                </CarouselContainer>
                <CustomerReview/>
        </div>
    )
}

export default BusinessDetails;