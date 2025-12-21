import "./topHeaderBar.css";
import React from "react";
import headerBell from "/public/headerBell.png";

export default function TopHeaderBar() {
  return (
    <div className="topHeaderName">
      <p>Partania's Mediterranean Bistro</p>
      <div className="topHeaderTitle">
        <p>Admin Dashboard</p>
      </div>
      <div className="rightSide">
        <div className="bell">
          <img
            src={headerBell}
            alt="Notifications"
            className="headerBellIcon"
          />
        </div>
        <div className="myName">
          <p>Staff member name goes here</p>
        </div>

        <div className="avatarPlaceholder">Staff image</div>
      </div>
    </div>
  );
}
