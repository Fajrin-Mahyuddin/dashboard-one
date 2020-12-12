import React from "react";
import "./galery.scss";
import { ImageGrid, Title } from "components";

function Galery() {
  return (
    <div className="galery-container">
      <Title title="Dashboard Galery" />
      <ImageGrid />
    </div>
  );
}

export default Galery;
