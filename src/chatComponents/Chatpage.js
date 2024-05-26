import React from "react";
import "./chatpage.css";
import List from "./List";
import Chat from "./Chat";
import Detail from "./Detail";
import Meta from '../components/Meta'


import BreadCrumb from '../components/BreadCrumb'

const Chatpage = () => {
  return (
    <>
      <Meta title={"chat"} />
      <BreadCrumb title='chat' />
      
      <div className="container-chat">
        <List>list</List>
        <Chat>chat</Chat>
        <Detail>detail</Detail>
      </div>
    </>
  );
};

export default Chatpage;
