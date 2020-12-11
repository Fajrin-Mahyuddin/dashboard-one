import React from "react";

function Link({ children, ...rest }) {
  return <a {...rest}>{children}</a>;
}

export default Link;
