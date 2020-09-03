import React from 'react';
import "../css/AllListings.css"
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom"
import { grabListing } from "./grab.js"
import ListingStatus from './ListingStatus'
import mockGraph from './mockGraph.png'

const AllListings = () => {

    const example_listing_swipe_stats = [
        {
            price: "$10,000,000",
            likeRatio: "70%",
            Volume: "128"
        },
        {
            price: "$9,500,000",
            likeRatio: "75%",
            Volume: "89"
        },
        {
            price: "$9,000,000",
            likeRatio: "80%",
            Volume: "154"
        },
        {
            price: "$8,500,000",
            likeRatio: "82%",
            Volume: "47"
        },
        {
            price: "$8,000,000",
            likeRatio: "75%",
            Volume: "290"
        },
        {
            price: "$7,500,000",
            likeRatio: "69%",
            Volume: "354"
        },
    ];

    return (
        <div className = "AllListings">
            <div className = "AllListing__firstRow">
                <div className = 'AllListings__imageContainer'>
                    <img src={grabListing().coverPhoto} className="AllListings__image" alt="cover photo" />
                    <Button 
                    className='AllListings__changeCP' 
                    to="/edit-listing" 
                    component={Link}
                    variant="contained"
                    color="default"
                    >Edit Photos
                    </Button>
                </div>
                <div className = "AllListings__details">
                    <div className = "details__firstRow">
                        <div className = 'details__name'>{grabListing().name}</div>
                        <ListingStatus listing = {grabListing().status}/>
                        {/* <div className = 'details__status'>{grabListing().status}</div> */}
                    </div>
                    <div>{grabListing().address}</div>
                    <div className = 'details__lastUpdate'>{grabListing().lastUpdate}</div>
                    <div className = 'details__bottomRow'>
                        <Button className='details__analysis' variant="contained" color="default"
                        // to="/edit-listing" 
                        // component={Link}
                        >Analysis
                        </Button>
                        <Button className='details__editListing' variant="contained" color="default"
                        // to="/edit-listing" 
                        // component={Link}
                        >Edit listing
                        </Button>
                        <Button className='details__editListing' variant="contained" color="default"
                        >Public view
                        </Button>
                        <Button className='details__unpublish' variant="contained" color="default"
                        >Unpublish
                        </Button>
                        <Button className='details__delete' variant="contained" color="default"
                        ><DeleteIcon />
                        </Button>
                    </div>
                </div>
            </div>
            <div className = "AllListing__secondRow">
                <div className = "AllListing__pricing">
                    <div className = 'AllListing__pricingTitle'>
                        <div>Price</div>
                        <div>Like Ratio</div>
                        <div>Volume</div>
                    </div>
                    <div>
                        {example_listing_swipe_stats.map(stat => (
                        // logic to render each stat on a line
                            <div className = "pricing__row">
                                <div>{stat.price}</div>
                                <div>{stat.likeRatio}</div>
                                <div>{stat.Volume}</div>
                            </div>
                        ))}
                    </div>
                    <Button 
                    className='AllListings__priceB' 
                    to="/edit-price" 
                    component={Link}
                    variant="contained"
                    color="default"
                    >Change Price: {grabListing().price}
                    </Button>
                </div>
                <div className = "AllListing__analysis">
                    <div className = "AllListing__estimate">Rinder estimates your property value at $8,500,000</div>
                    <img src= {mockGraph} alt="Property analysis" className="AllListings__graph"/>
                </div>
            </div>
        </div>
    )
}

export default AllListings
