import React, { useState } from "react";
import "./galery.scss";
import { ImageGrid, Title } from "components";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100%" },
};

function Galery() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="galery-container">
      <Title title="Galery" />
      <ImageGrid />
      {/* <motion.div
        variants={variants}
        initial="closed"
        animate="open"
        transition={{ type: "spring", delay: 1 }}
      >
        <div
          style={{ backgroundColor: "red", width: "100px", height: "100px" }}
        ></div>
      </motion.div> */}
      <button>coba</button>
    </div>
  );
}

export default Galery;
