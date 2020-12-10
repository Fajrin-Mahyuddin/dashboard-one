import React from "react";
import "./sidemenu.scss";
import { Link } from "components";

function Sidemenu() {
  return (
    <div className="sidemenu">
      <Link
        className="link-item active"
        href="/"
        title="Menu"
        icon="fa"
        active={true}
      />
      <Link
        className="link-item"
        href="/"
        title="Profile"
        icon="fa"
        active={false}
      />
      <Link
        className="link-item"
        href="/"
        title="Setting"
        icon="fa"
        active={false}
      />
    </div>
  );
}

export default Sidemenu;
