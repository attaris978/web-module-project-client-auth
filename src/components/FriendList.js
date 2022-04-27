import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getFriends } from "./apiFetch";

const Friend = props => {
    const {name, email} = props;
    return (
<div>
        <p>-{name}-</p>
        <p>-{email}-</p>
        </div>
    )
}

const FriendList = (props) => {
  const [friends, setFriends] = useState([]);
  useEffect(async () => {
    const friendsList = await getFriends(localStorage.getItem("token"));
    // setFriends(friendsList);
    setFriends(friendsList);
    // console.log(friends);
    // return setFriends(null);
  }, []);
  return (
    <div>
        {friends.map(friend => {
           return  <Friend name={friend.name} email={friend.email} key={friend.id}/>
        })}
    </div>)
};

export default FriendList;
