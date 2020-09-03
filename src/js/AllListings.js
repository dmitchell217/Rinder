import React, {useState} from 'react';
import "../css/AllListings.css"
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom"
import { grabListing } from "./grab.js"
import ListingStatus from './ListingStatus'

const AllListings = () => {

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
                    This will show some simple graph of how the listing fairs at different prices
                    <Button 
                    className='AllListings__price' 
                    to="/edit-price" 
                    component={Link}
                    variant="contained"
                    color="default"
                    >{grabListing().price}
                    </Button>
                </div>
                <div className = "AllListing__analysis">
                    This will show some other data sciency thing about the listing
                    Maybe a recommendation or two idk yet.
                </div>
            </div>
        </div>
    )
}

export default AllListings
