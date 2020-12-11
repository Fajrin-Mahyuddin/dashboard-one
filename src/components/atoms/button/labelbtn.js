import React from "react";

function Labelbtn({ title, Icons, size, ...rest }) {
  return (
    <span {...rest} style={{ fontSize: `${size}px` }}>
      <Icons /> {title}
    </span>
  );
}

export default Labelbtn;
