import React, {useState} from 'react';
import "../css/ListingNav.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const ListingNav = ( {active} ) => {

    const getColor = (type) => {
        return (type == active ? 'primary' : 'default')
    }

    return (
        <div className = 'ListingNav__body'>
            <div className = "AllListings__listingTypes">
                <div className="AllListings__allButton">
                    <Button to="/all-listings" component={Link} color = {getColor("all")}>All listings</Button>
                </div>
                <div className="AllListings__activeButton">
                    <Button to="/active-listings" component={Link} color = {getColor("active")}>Active</Button>
                </div>
                <div className="AllListings__reviewButton">
                    <Button to="/inReview-listings" component={Link} color = {getColor("inReview")}>In Review</Button>
                </div>
                <div className="AllListings__unpublishedButton">
                    <Button to="/unPublished-listings" component={Link} color = {getColor("unPublished")}>Unpublished</Button>
                </div>
                <div className="AllListings__newButton">
                    <Button to="/new-listing" component={Link} color = {getColor("all-listings")}>Add New Listing</Button>
                </div>
            </div>
        </div>
    )
}

export default ListingNav
