// 14
import React from 'react';
import "./topBar.css";

// 17
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const TopBar = () => {
  return (
    <div className="topBar">
      {/* TopBar */}

      {/* 18 */}
      <div className="topBarWrapper">
        <div className="topLeft">
            <span className='logo'>CARELESS ADMIN</span>
        </div>
        <div className="topRight">
            <div className="topBarIconsCon">
                <NotificationsIcon></NotificationsIcon>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topBarIconsCon">
                <LanguageIcon></LanguageIcon>
                <span className="topIconBadge">2</span>
            </div>
            <div className="topBarIconsCon">
                <SettingsIcon></SettingsIcon>
            </div>
            <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default TopBar;