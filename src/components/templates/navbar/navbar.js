import React from "react";
import "./navbar.scss";
import { Link, Labelbtn, Image } from "components";
import {
  MailOutlined,
  MenuOutlined,
  UserOutlined,
  BellOutlined,
} from "@ant-design/icons";
import img from "assets/img/image.jpg";

function Navbar() {
  return (
    <div className="nav">
      <Link href="# " className="nav-logo">
        <Labelbtn Icons={MenuOutlined} size={14} />
      </Link>
      <div className="nav-menu">
        <Link href="# " className="nav-menu-item">
          <Labelbtn Icons={UserOutlined} size={14} title="Profile" />
        </Link>
        <Link href="# " className="nav-menu-item">
          <Labelbtn Icons={BellOutlined} size={14} title="Notifikasi" />
        </Link>
        <Link href="# " className="nav-menu-item">
          <Image className="nav-menu-item-img" src={img} />
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
