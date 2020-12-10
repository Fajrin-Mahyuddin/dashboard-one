import React from "react";
import "./profile.scss";
import { Image } from "components";
import img from "assets/img/image.jpg";

function Profile() {
  return (
    <div className="profile">
      <Image className="profile-img" src={img} alt="profile-img" />
      <div className="profile-name">Fajrin Mahyuddin</div>
    </div>
  );
}

export default Profile;
