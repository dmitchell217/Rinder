import React from 'react';
import { grabListing } from "./grab.js";
import '../css/ListingStatus.css'

const ListingStatus = ( {listing} ) => {

    switch(true) {
        case listing === "Active":
          return (
            <div>
                <div className = 'ListingStatus__tag active'>{grabListing(listing).status}</div>
            </div>
                )
        case listing === "InReview":
            return (
                <div>
                    <div className = 'ListingStatus__tag inReview'>{grabListing(listing).status}</div>
                </div>
                )
        case listing === "UnPublished":
            return (
                <div>
                    <div className = 'ListingStatus__tag unPublished'>{grabListing(listing).status}</div>
                </div>
                )
        default:
          return (
            <div>
                <div className = 'ListingStatus__tag active'>{grabListing(listing).status}</div>
            </div>
          )
      }
}

export default ListingStatus
