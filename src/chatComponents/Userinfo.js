import React from "react";
import "./userinfo.css";
import avatar from "../images/avatar.png";
import more from "../images/more.png";
import video from "../images/video.png";
import edit from "../images/edit.png";

const Userinfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src={avatar} alt=""></img>
        <h2 className="chat-h2">John Doe</h2>
      </div>
      <div className="icons">
        <img src={more} alt=""></img>
        <img src={video} alt=""></img>
        <img src={edit} alt=""></img>
      </div>
    </div>
  );
};

export default Userinfo;
