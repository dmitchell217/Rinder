const grabUserImg = () => {
    // return mark for now
    return ('https://pmcvariety.files.wordpress.com/2017/05/mark-zuckerberg.jpg?w=1000')
    // in reality will fetch user's picture url from database and return that
}
const grabUserName = () => {
    // return mark for now
    return ("Mark")
}

const grabUserType = () => {
    // return "regular member" for now
    return ("Regular member")
}

// grab listing detailsfrom database
const grabListing = () => {
    // return stock details for now
    let rv = {"owner": "Mark",
          "coverPhoto": "https://www.sustainableplaces.eu/wp-content/uploads/2017/02/SmartBuilding.jpg",
          "address": "123 mock adress ln, GA, 30327, US",
          "lastUpdate": "some date function here that update the time on every edit",
          "name": "Spacious & Beautiful Modern Skyscraper",
          "status": "Active",
          "allPhotos": [],
          "price": "$10,000,000"
         }
    return rv
}


export {grabUserImg, grabUserName, grabUserType, grabListing }