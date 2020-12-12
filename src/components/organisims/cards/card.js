import React from "react";
import "./card.scss";

function Card({ title, Icons, data }) {
  return (
    <div className="card-item">
      <Icons style={{ fontSize: "7vw" }} />
      <div className="card-info">
        <h4>{title}</h4>
        <p>{data}</p>
      </div>
    </div>
  );
}

export default Card;
