import "./sidebar.css";
import React, { useEffect, useState } from "react";

import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  Settings,
  Lock,
} from "@material-ui/icons";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Sidebar() {
  const [isActive, setisActive] = useState();

  const location = useLocation();

  useEffect(() => {
    setisActive(extractName(location.pathname));
  }, [location.pathname]);

  const extractName = (path) =>
    path.substring(path.lastIndexOf("/") + 1, path.length);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/admin/home" className="link">
              <li
                className={`sidebarListItem ${
                  isActive === "home" ? "active" : null
                }`}
              >
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </NavLink>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink to="/admin/users" className="link">
              <li
                className={`sidebarListItem ${
                  isActive === "users" ? "active" : null
                }`}
              >
                <PermIdentity className="sidebarIcon" />
                Employee
              </li>
            </NavLink>
            <NavLink to="/admin/products" className="link">
              <li
                className={`sidebarListItem ${
                  isActive === "products" ? "active" : null
                }`}
              >
                <Storefront className="sidebarIcon" />
                Products
              </li>
            </NavLink>
            <li className="sidebarListItem">
              <AttachMoney className="sidebarIcon" />
              Transactions
            </li>

            <NavLink to="/admin/recipts" className="link">
              <li
                className={`sidebarListItem ${
                  isActive === "recipts" ? "active" : null
                }`}
              >
                <BarChart className="sidebarIcon" />
                Recipts
              </li>
            </NavLink>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Cutomers</h3>
          <ul className="sidebarList">
            <NavLink to="/admin/reports" className="link">
              <li
                className={`sidebarListItem ${
                  isActive === "reports" ? "active" : null
                }`}
              >
                <Report className="sidebarIcon" />
                Reports
              </li>
            </NavLink>

            <NavLink to="/admin/settings" className="link">
              <li
                className={`sidebarListItem ${
                  isActive === "settings" ? "active" : null
                }`}
              >
                <Settings className="sidebarIcon" />
                Settings
              </li>
            </NavLink>
            <NavLink to="/" className="link">
              <li className="sidebarListItem">
                <Lock className="sidebarIcon" />
                Logout
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
