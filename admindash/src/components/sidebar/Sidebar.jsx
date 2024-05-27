// 22
import React from 'react';
import "./sidebar.css";

// 26
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import ReportIcon from '@mui/icons-material/Report';

// 98
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar */}

      {/* 27 */}
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
               <Link to="/" className="link">
                  <li className="sidebarListItem">
                    <LineStyleIcon className="sidebarIcon"></LineStyleIcon>
                     Home
                  </li>
               </Link>
               <li className="sidebarListItem">
                 <TimelineIcon className="sidebarIcon"></TimelineIcon>
                  Analytics
               </li>
               <li className="sidebarListItem">
                 <TrendingUpIcon className="sidebarIcon"></TrendingUpIcon>
                  Sales
               </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
               {/* 99 */}
               <Link to="/users" className="link">
                  <li className="sidebarListItem">
                    <PermIdentityIcon className="sidebarIcon"></PermIdentityIcon>
                     Users
                  </li>
               </Link>
               <Link to="/products" className="link">
                  <li className="sidebarListItem">
                    <StorefrontIcon className="sidebarIcon"></StorefrontIcon>
                     Products
                  </li>
               </Link>
               <li className="sidebarListItem">
                 <AttachMoneyIcon className="sidebarIcon"></AttachMoneyIcon>
                  Transactions
               </li>
               <li className="sidebarListItem">
                <BarChartIcon></BarChartIcon>
                 Reports
               </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                 <MailOutlineIcon className="sidebarIcon"></MailOutlineIcon>
                  Mail
               </li>
               <li className="sidebarListItem">
                 <DynamicFeedIcon className="sidebarIcon"></DynamicFeedIcon>
                  Feedback
               </li>
               <li className="sidebarListItem">
                  <ChatBubbleOutlineIcon className="sidebarIcon"></ChatBubbleOutlineIcon>
                   Messages
               </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                 <WorkOutlineIcon className="sidebarIcon"></WorkOutlineIcon>
                  Manage
               </li>
               <li className="sidebarListItem">
                 <TimelineIcon className="sidebarIcon"></TimelineIcon>
                  Analytics
               </li>
               <li className="sidebarListItem">
                 <ReportIcon className="sidebarIcon"></ReportIcon>
                  Reports
               </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;