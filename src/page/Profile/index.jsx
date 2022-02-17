import EditProfile from 'componants/EditProfile';
import React, {useState} from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {

  const [userPage, setUserPage] = useState('');
  const auth = useSelector(state => state);
  
  if (auth.connected.connected && !userPage) {
    fetch('http://localhost:1337/users/me', {
      method: 'get',
      headers: {
        'Authorization': `Bearer ${auth.connected.token}`, 
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      console.log(auth.connected.token);
      console.log(auth.connected.connected);
      setUserPage(response);
    })

    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  else if (auth.connected.connected && userPage) {
    return (
    <div>
      <h1>Bienvenue sur ton profil sombre mécréant</h1>
      <p>Username : <span>{userPage.username}</span> </p>
      <p>Email : <span>{userPage.email}</span> </p>
      <p>Description : <span>{userPage.description}</span></p>

      <EditProfile profile={userPage} onUserPage={() => setUserPage()}/>
    </div>
  )
  }
  else {
    return (
      <div>
        <p>Suce mon cul</p>
      </div>
    )
  }
}

