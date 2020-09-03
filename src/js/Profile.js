import React from 'react';
import "../css/Profile.css";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import TuneIcon from '@material-ui/icons/Tune';
import CreateIcon from '@material-ui/icons/Create';
import IconButton from "@material-ui/core/IconButton"
import { grabUserImg, grabUserName, grabUserType } from "./grab.js"
import {Link, useHistory } from "react-router-dom"
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function Profile() {
    // const history = useHistory();
    return (
        <div className='profile'>
            <div className="profile__title">
                <h2>My Profile -  The colored buttons are not centered</h2>
            </div>
            <div className="profile__group">
                <div className="profile__container">
                    <img src={grabUserImg()} className="profile__image" alt="propic" />
                </div>
                <div className="profile__edit">
                    <h3>Edit Listings</h3>
                    <Link to='/all-listings'>
                        <IconButton>
                            <CreateIcon />
                        </IconButton>
                    </Link>
                    <h3>{grabUserName()}</h3>
                    <h3>{grabUserType()}</h3>
                </div>
            </div>
            <div className = "columns">
                <Link to='/preferences'>
                    <IconButton className="profile__preferences">
                        <div className="rows">
                            <h3>Preferences</h3>
                            <TuneIcon />
                        </div>
                    </IconButton>
                </Link>
                <Link to='/account/personal'>
                    <IconButton className="profile__account">
                        <div className="profile__account rows">
                            <h3>Account</h3>
                            <SettingsIcon />
                        </div>
                    </IconButton>
                </Link>
                <Link to='/help'>
                    <IconButton className="profile__help">
                        <div className="profile__help rows">
                            <h3>Help</h3>
                            <HelpOutlineIcon />
                        </div>
                    </IconButton>
                </Link>
            </div>
        </div>

        // <div className="profile">
        //     <Link to='/myProfile'>
        //         <IconButton>
        //             <PersonIcon className = "header__icon"/>
        //         </IconButton>
        //     </Link>
        //     <Link to='/'>
        //         <img src={logo} className="header__logo" alt="logo" />
        //     </Link>
        //     <Link to='/chat'>
        //         <IconButton>
        //             <ForumIcon className = "header__icon"/>
        //         </IconButton>
        //     </Link>
        // </div>
    )
}

export default Profile