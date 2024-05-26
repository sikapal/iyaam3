import React, { useState } from "react";
import "./chatlist.css";
import search from "../images/search.png";
import plus from "../images/plus.png";
import minus from "../images/minus.png";
import avatar from "../images/avatar.png";

const Chatlist = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className="chatlist">
      <div className="searchplace">
        <div className="searchBar">
          <img src={search} alt="searchplace" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          onClick={() => setAddMode((prev) => !prev)}
          src={addMode ? minus : plus}
          alt="plus"
          className="add"
        />
      </div>
      <div className="item">
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Tizi Bienvenue</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Ulrich Yamen </span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Ulrich Yamen </span>
          <p>Hello</p>
        </div>
      </div>
      <div className="item">
        <img src={avatar} alt="avatar" />
        <div className="texts">
          <span>Ulrich Yamen </span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
};

export default Chatlist;
