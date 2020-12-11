import React from "react";
import { RightOutlined } from "@ant-design/icons";

function Breadcrumbs({ data }) {
  return (
    <div className="breadcrumb">
      {data.map((list, i) => {
        return (
          <span key={i}>
            {list} {Number(data.length - 2) < i ? " " : <RightOutlined />}{" "}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
