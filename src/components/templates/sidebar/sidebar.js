import React from "react";
import "./sidebar.scss";
import { Profile, Sidemenu, Sidefooter } from "components";

function Sidebar() {
  return (
    <div className="sidebar">
      <Profile />
      <Sidemenu />
      <Sidefooter />
    </div>
  );
}

export default Sidebar;
