import React from "react";
import "./sidemenu.scss";
import { Link, Labelbtn } from "components";
import {
  HomeOutlined,
  RightOutlined,
  BlockOutlined,
  TableOutlined,
} from "@ant-design/icons";

function Sidemenu() {
  return (
    <div className="sidemenu">
      <Link className="link-item active" href="/">
        <Labelbtn title="Dashboard" Icons={HomeOutlined} /> <RightOutlined />
      </Link>
      <Link className="link-item" href="/">
        <Labelbtn title="Components" Icons={BlockOutlined} /> <RightOutlined />
      </Link>
      <Link className="link-item" href="/">
        <Labelbtn title="Components" Icons={TableOutlined} /> <RightOutlined />
      </Link>
    </div>
  );
}

export default Sidemenu;
