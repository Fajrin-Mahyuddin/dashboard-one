import React, { useState } from "react";
import "./galery.scss";
import { ImageGrid, Title } from "components";

const variants = {
  open: { opacity: 1, x: "10px" },
  closed: { opacity: 0, x: 0 },
};

function Galery() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="galery-container">
      <Title title="Galery" />
      <ImageGrid />
    </div>
  );
}

export default Galery;
