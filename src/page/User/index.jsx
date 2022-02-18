import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PostList from '../../componants/PostList';

const User = () => {
  const { username } = useParams();
  const [user, setUser] = useState("");
  const auth = useSelector(state => state);

  if (auth.connected.connected && !user) {
    fetch(`http://localhost:1337/users/${username}`, {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${auth.connected.token}`,
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((response) => {
      setUser(response);
    })
    
    return (
      <div>
        <h1>Profile</h1>
        <p>Loading...</p>
      </div>
    );
  }
  else if (auth.connected.connected && user) {
    return (
      <>
        <div>
          <h1>Profile</h1>
          <p >Username : <span>{user.username}</span> </p>
          <p >Email : <span>{user.email}</span> </p>
          <p >Description : <span>{user.description}</span> </p>
        </div>

        <PostList user={user}/>
      </>
    );
  }
  else {
    return (
      <div>
        <p>ça ne marche pas! c'est normal c'est de l'informatique!</p>
      </div>
    )
  }

};

export default User;
