import React, {useState} from 'react';
import { useSelector } from 'react-redux';

export default function EditProfile({profile, onUserPage}) {
  
  const [description, setdescription] = useState('');
  const [userName, setUserName] = useState("");
  const auth = useSelector(state => state);
  
  const changeDescription = () => {
      
    const data = {
      description: description,
    };
    
    fetch('http://localhost:1337/users/me', {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${auth.connected.token}`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      onUserPage(profile);
    })

  }

  const changeUsername = () => {
      
    const data = {
      username: userName, 
    };
    
    fetch('http://localhost:1337/users/me', {
      method: 'put',
      headers: {
        'Authorization': `Bearer ${auth.connected.token}`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      onUserPage(profile);
    })

  }
  
  return (
    <div>
      <div className="Form">
        <form action="post">
          <label htmlFor="input-text">Description</label>
          <input type="text" value={description} onChange={(e) => setdescription(e.target.value)} id='profile-description' />
          <button type="button" onClick={() => changeDescription()}>Edit</button>
        </form>
        
        <form action="post">
          <label htmlFor="input-text">Pseudonyme</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} id='profile-username' />
          <button type="button" onClick={() => changeUsername()}>Edit</button>
        </form>
      </div>      
    </div>
  )
}
