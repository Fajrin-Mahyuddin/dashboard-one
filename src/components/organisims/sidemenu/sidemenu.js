import React from "react";
import "./sidemenu.scss";
import { Link, Labelbtn } from "components";
import {
  HomeOutlined,
  RightOutlined,
  BlockOutlined,
  TableOutlined,
} from "@ant-design/icons";

const menus = [
  {
    id: 1,
    link: "Dashboard",
    ico: HomeOutlined,
    isOpen: false,
    child: [
      { id: 111, link: "Com 1", ico: RightOutlined },
      { id: 112, link: "Com 2", ico: RightOutlined },
    ],
  },
];

function Sidemenu() {
  return (
    <ol className="sidemenu">
      <li>
        <Link className="link-item" href="/">
          <Labelbtn title="Dashboard" Icons={HomeOutlined} />
        </Link>
      </li>
      <li>
        <Link className="link-item active" href="/">
          <Labelbtn title="Components" Icons={BlockOutlined} />{" "}
          <RightOutlined />
        </Link>
        <ol className="child-link">
          <li>
            <Link className="child-link-item" href="# ">
              <Labelbtn title="Component one" Icons={RightOutlined} />
            </Link>
          </li>
          <li>
            <Link className="child-link-item" href="# ">
              <Labelbtn title="Component two" Icons={RightOutlined} />
            </Link>
          </li>
        </ol>
      </li>

      <li>
        <Link className="link-item" href="/">
          <Labelbtn title="Components" Icons={TableOutlined} />{" "}
          <RightOutlined />
        </Link>
      </li>
    </ol>
  );
}

export default Sidemenu;
