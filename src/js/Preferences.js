import React, { useState, } from 'react';
import '../css/Preferences.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
// import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
// import SettingsIcon from '@material-ui/icons/Settings';
// import TuneIcon from '@material-ui/icons/Tune';
// import CreateIcon from '@material-ui/icons/Create';
// import IconButton from "@material-ui/core/IconButton"
// import logo from './logo.svg';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// Figure out how to pass through parameter from dropdown (after select) to this function
// so that I can update database
const updateCategory= (cat) => {
    console.log(`${cat.value} is your new category preference`)
}
const updateLocation = (cat) => {
    console.log(`${cat.value} is your new category preference`)
}
// const updatePref2 = () => {
// }

// const updatePref3 = () => {
// }
// const updatePref3 = () => {
// }

function Preferences() {
    // keep track of input
    // const [input, setInput] = useState('');
    // const [preferences, setPreferences] = useState([
    //     {
    //         preference_title: "I am interested in",
    //         preference_response: "Residential",
    //     },
    //     {
    //         preference_title: "My location (Zipcode)",
    //         preference_response: "30327",
    //     },
    //     {
    //         preference_title: "Maximum distance (miles)",
    //         preference_response: "25",
    //     },
    //     {
    //         preference_title: "Price ($)",
    //         preference_response: "100",
    //     }
    // ]);
    const categories = [
        'Residential Properties', 'Commercial properties', 'Both'
      ];
    const defaultCategory = categories[0];

    const locations = [
        'Atlanta', 'NYC', 'LA'
      ];
    const defaultLocation = locations[0];

    return (
        <div>
            <div>Add more preferences...</div>
            <div className ='preference__container'>
                <div className ='preference__description'>I am interested in</div>
                <Dropdown className ='preference__dropdown' options={categories} onChange={updateCategory} value={defaultCategory} placeholder="Select a category" />
            </div>
            <div className ='preference__container'>
                <div className ='preference__description'>I am looking for properties in</div>
                <Dropdown className ='preference__dropdown' options={locations} onChange={updateLocation} value={defaultLocation} placeholder="Select a category" />
            </div>
        </div>
    )
}

export default Preferences