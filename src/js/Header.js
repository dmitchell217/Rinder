import React from 'react';
import "../css/Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton';
import logo from './logo.svg';
import {Link, useHistory } from "react-router-dom"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import badLogo from './badLogo.png'

function Header({ backButton}) {
    const history = useHistory();
    return (
        // learn BEM
        <div className="header">
            {/* <Link to='/myProfile'>
                {backButton ? (
                <IconButton onClick={ () =>history.replace(backButton)}>
                    <ArrowBackIosIcon className = "header__icon"/>
                </IconButton>
                ) : (
                <IconButton>
                    <PersonIcon className = "header__icon"/>
                </IconButton>
                )}
                                )}
            </Link> */}
            <Link to='/myProfile'>
                <IconButton>
                    <PersonIcon className = "header__icon"/>
                </IconButton>
            </Link>
            <Link to='/'>
                <img src={badLogo} className="header__logo" alt="logo" />
            </Link>
            <Link to='/chat'>
                <IconButton>
                    <ForumIcon className = "header__icon"/>
                </IconButton>
            </Link>
        </div>
    )
}

export default Header
