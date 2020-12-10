import React from "react";

function Link({ title, icon, ...rest }) {
  return (
    <a {...rest}>
      {title} <i className={`fa ${icon}`}> ^ </i>
    </a>
  );
}

export default Link;
