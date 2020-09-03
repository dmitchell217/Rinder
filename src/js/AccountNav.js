import React from 'react';
import "../css/AccountNav.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import PersonIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import LockIcon from '@material-ui/icons/Lock';
import NotificationsIcon from '@material-ui/icons/Notifications';

const AccountNav = ( {active} ) => {

    const getColor = (type) => {
        return (type === active ? 'primary' : 'default')
    }

    return (
        <div className = 'AccountNav__body'>    
            <div className="Account___allButton">
                <PersonIcon />
                <Button to="/account/personal" component={Link} color = {getColor("personal")}>Personal Info</Button>
            </div>
            <div className="Account___activeButton">
                <MoreHorizIcon />
                <Button to="/account/additional" component={Link} color = {getColor("additional")}>Additional Info</Button>
            </div>
            <div className="Account___reviewButton">
                <LockIcon />
                <Button to="/account/login" component={Link} color = {getColor("login")}>Login & Security</Button>
            </div>
            <div className="Account__unpublishedButton">
                <NotificationsIcon />
                <Button to="/account/notifications" component={Link} color = {getColor("notifications")}>Notifications</Button>
            </div>
        </div>
    )
}

export default AccountNav
