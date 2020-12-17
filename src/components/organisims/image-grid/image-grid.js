import React from "react";
import "./image-grid.scss";
import { Image } from "components";
import img1 from "assets/img/image1.jpg";
import img2 from "assets/img/image2.jpg";
import img3 from "assets/img/image3.jpg";
import img4 from "assets/img/image4.jpg";
import { CalendarOutlined } from "@ant-design/icons";

function ImageGrid() {
  return (
    <div className="image-wrapper">
      <Image
        className="img"
        src={img1}
        alt="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ"
      />
      <Image
        className="img"
        src={img2}
        alt="https://i.picsum.photos/id/101/2621/1747.jpg?hmac=cu15YGotS0gIYdBbR1he5NtBLZAAY6aIY5AbORRAngs"
      />
      <Image
        className="img"
        src={img3}
        alt="https://i.picsum.photos/id/1018/3914/2935.jpg?hmac=3N43cQcvTE8NItexePvXvYBrAoGbRssNMpuvuWlwMKg"
      />
      <div className="box img">
        <span className="date-box">3 Dec</span>
        <CalendarOutlined className="ico-galery" />
      </div>
      <div className="box img">
        <span className="box-quote">"Make a beauty day with code"</span>
      </div>
      <Image
        className="img"
        src={img4}
        alt="https://i.picsum.photos/id/1016/3844/2563.jpg?hmac=WEryKFRvTdeae2aUrY-DHscSmZuyYI9jd_-p94stBvc"
      />
    </div>
  );
}

export default ImageGrid;
