import React from "react";
import "./image-grid.scss";
import { Image } from "components";
import img from "assets/img/image.jpg";
import { CalendarOutlined } from "@ant-design/icons";

function ImageGrid() {
  return (
    <div className="image-wrapper">
      <Image className="img" src={img} />
      <Image className="img" src={img} />
      <Image className="img" src={img} />
      <div className="box img">
        <span className="date-box">3 Dec</span>
        <CalendarOutlined className="ico-galery" />
      </div>
      <div className="box img">
        <span className="box-quote">"Make a beauty day with code"</span>
      </div>
      <Image className="img" src={img} />
    </div>
  );
}

export default ImageGrid;
