import React, { useState } from "react";
import ProfilePicture from "../Spring/Home/ProfilePicture";


export default function ProfileClick() {
  const [picture, setPicture] = useState(false);

  const showPicture = () => setPicture(!picture);

  return (
    <div className={picture ? "movePic" : "originPic"}>
        <ProfilePicture onClick={showPicture} />
    </div>
  );
}
