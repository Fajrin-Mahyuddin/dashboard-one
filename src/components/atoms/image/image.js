import React from "react";

function Image({ src, alt, ...rest }) {
  return <img {...rest} src={src} alt={alt} />;
}

export default Image;
