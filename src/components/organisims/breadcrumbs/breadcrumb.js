import React from "react";
import "./breadcrumbs.scss";
import { RightOutlined } from "@ant-design/icons";

function Breadcrumbs({ data }) {
  return (
    <div className="breadcrumb">
      {data.map((list, i) => {
        return (
          <a href="# " key={i}>
            {list}{" "}
            {Number(data.length - 2) < i ? (
              " "
            ) : (
              <RightOutlined style={{ fontSize: "9px" }} />
            )}{" "}
          </a>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
