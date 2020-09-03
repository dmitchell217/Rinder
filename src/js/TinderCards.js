import React, { useState, useEffect } from 'react'
// import database_fb from './firebase'
import TinderCard from "react-tinder-card"
import "../css/TinderCards.css"

function TinderCards() {
    // const [listings, setlistings] = useState([
    const listings = [
        {
            listingID: 1,
            owner: "David",
            price: "$10,000,000",
            coverPhoto : "https://cdn.vanderbilt.edu/vu-news/files/20190417213956/Engineering_Science_Building_ESB-585x390.jpg",
            photos: ["", "", "", "", ""],
            photo1: "https://images.craigslist.org/00Z0Z_3qoj0aQX7jU_0CI0pL_600x450.jpg",
            photo2: "https://images.craigslist.org/00A0A_55Chln32Ruu_03f043_600x450.jpg",
            photo3: "https://images.craigslist.org/00u0u_3tKBEzn3QAy_0hg0n0_600x450.jpg",
            features: "https://images.craigslist.org/01717_1itpHEbXUBa_04b038_600x450.jpg",
            ownerPhoto:'data:image/jpeg;base64,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'
        },
        {
            listingID: 2,
            owner: "Mark",
            price: "$14,000,000",
            coverPhoto : "https://www.horiba.com/fileadmin/uploads/Global/Photos/News/2019/20190711_HTS.jpg",
            photo1: "https://images.craigslist.org/00P0P_2nRARoUHiV7_06Z07g_600x450.jpg",
            photo2: "https://images.craigslist.org/00P0P_6L8LWRhk7SW_09G07g_600x450.jpg",
            photo3: "https://images.craigslist.org/00Q0Q_4bylSioDAwe_0CI0t2_600x450.jpg",
            features: "",
            ownerPhoto: 'https://pmcvariety.files.wordpress.com/2017/05/mark-zuckerberg.jpg?w=1000'
        },
        {
            listingID: 3,
            owner: "Mark",
            price: "$12,000,000",
            coverPhoto : "https://www.horiba.com/fileadmin/uploads/Global/Photos/News/2019/20190711_HTS.jpg",
            photo1: "https://images.craigslist.org/00P0P_2nRARoUHiV7_06Z07g_600x450.jpg",
            photo2: "https://images.craigslist.org/00P0P_6L8LWRhk7SW_09G07g_600x450.jpg",
            photo3: "https://images.craigslist.org/00Q0Q_4bylSioDAwe_0CI0t2_600x450.jpg",
            features: "",
            ownerPhoto: 'https://pmcvariety.files.wordpress.com/2017/05/mark-zuckerberg.jpg?w=1000'
        }
    ];

    useEffect(()=> {console.log("I'm mounted, If i see this more than once it means my component remounts upon swipe")}, [])

    const [photoStyle, setPhotoStyle] = useState(0);

    const onSwipe = (direction) => {
        console.log('You swiped: ' + direction)
        // need to somehow change the style of the current tinder card based on direction of swipe
        console.log(photoStyle)
        if (direction == "down" || direction == "up") {setPhotoStyle(photoStyle+1)}
        // else {setPhotoStyle(0)}
        return
        // save this in databse for price analytics
      }
      const onCardLeftScreen = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
        // setPhotoStyle(0)
      }


      // determines which Tindercard photo type the user sees
      const getProperty = (listing) => {
          switch(true) {
            case photoStyle == 0:
                return listing.coverPhoto
            case photoStyle == 1:
                return listing.photo1
            case photoStyle == 2:
                return listing.photo2
            case photoStyle == 3:
                return listing.photo3
            case photoStyle == 4:
                return listing.features
            case photoStyle == 5:
                return listing.ownerPhoto
            default:
                return listing.coverPhoto
          }
      }
    console.log(photoStyle)
    return (
        <div>
            <div className = "tinderCards__cardContainer">
            {listings.map(listing=> (
                <TinderCard
                className = 'swipe'
                key = {listing.listingID}
                onSwipe={(dir)=>onSwipe(dir)}
                onCardLeftScreen={onCardLeftScreen(listing.listingID)}
                // prevents up and down swipe
                preventSwipe={['up', 'down']}
                >
                    <div
                    // style = {{ backgroundImage: `url(${listing.coverPhoto})`}} 
                    style = {{backgroundImage: `url(${getProperty(listing)})`}}
                    className = 'card'
                    >
                        <h3>{listing.price}</h3>
                    </div>
                </TinderCard>
            )
            )}
            </div>
        </div>
    )
}

export default TinderCards


    // Piece of code which runs based on a condition
    // useEffect(() => {
    //     // this is where the code runs...

    //     // this will run ONCE when the component loads (if square brackets are empy)
    //     // , and never again
    //     //  and everytime any variable below changes

    //     // const unsubscribe = database_fb.collection('people').onSnapshot(snapshot => (
    //     //     // set people to a snapshot of items in firebase collection 'people'
    //     //     setPeople(snapshot.docs.map(doc => doc.data()))
    //     // ))

    //     // clean up function => calls unsubscribe to detach listener - clears up browser memory
    //     // return () => {
    //     //     unsubscribe();
    //     // };

    // }, []);