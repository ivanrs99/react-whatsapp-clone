import React from 'react';
import './ProfileNav.css';
import ChatIcon from '@material-ui/icons/Chat';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const ProfileNav = () => {
    return (
        <div className="header_container">
            <div className="img_cont">
                <div className="img">
                    <img src="./myprofile.jpg" className="profilepic" alt="profile"/>
                </div>
            </div>
            <div className="icons_cont">
                <div>
                    <DonutLargeIcon className="icon" titleAccess="Estados"/>
                    <ChatIcon className="icon" titleAccess="Nuevo chat"/>
                    <MoreVertIcon className="icon" titleAccess="Menú"/>
                </div>
            </div>
        </div>
    )
}

export default ProfileNav;