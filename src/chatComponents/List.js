import React from 'react'
import "./list.css";
import Chatlist from './Chatlist';
import UserInfo from './Userinfo';

const List = () => {
  return (
    <div className="list">
      <UserInfo />
      <Chatlist />
    </div>
  )
}

export default List
