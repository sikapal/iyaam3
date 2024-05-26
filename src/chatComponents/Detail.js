import React from "react";
import "./detail.css";
import avatar from "../images/avatar.png";
import arrowUp from "../images/arrowUp.png";
import arrowDown from "../images/arrowDown.png";
import download from "../images/download.png";

const Detail = () => {
  return (
    <>
      <div className="detail">
        <div className="user">
          <img src={avatar} alt="avatar" />
          <h2>Tizi Bienvenue</h2>
          <p>Description of the user is up here</p>
        </div>

        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat setting</span>
              <img src={arrowUp} alt="arrowUp"></img>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Help & Privacy</span>
              <img src={arrowUp} alt="arrowDown"></img>
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Photo</span>
              <img src={arrowDown} alt="arrowUp"></img>
            </div>

            <div className="photos">
              <div className="photoItem">
                <div className="photoDetail">
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="phoitem"
                  />
                  <span> Montre 2024</span>
                </div>
                <img src={download} alt="download" className="icon"></img>
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="phoitem"
                  />
                  <span> Montre 2024</span>
                </div>
                <img src={download} alt="download" className="icon"></img>
              </div>
              <div className="photoItem">
                <div className="photoDetail">
                  <img
                    src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="phoitem"
                  />
                  <span> Montre 2024</span>
                </div>
                <img src={download} alt="download" className="icon"></img>
              </div>
            </div>
          </div>
        </div>
        <div className="block-user">  <button>Block User</button></div>
       
      </div>
    </>
  );
};

export default Detail;
