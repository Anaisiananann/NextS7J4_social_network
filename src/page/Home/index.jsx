import React, { useState }  from 'react';
import { useSelector } from 'react-redux';
import Post from "../../componants/Post";
//import Cookies from 'js-cookie';
import TextareaAutosize from '@mui/material/TextareaAutosize';

export default function Home() {
  const [text, settext] = useState('');

  const auth = useSelector(state => state);

  const changetext = () => {
      
    const data = {
      text: text,
      //user: Cookies.get('id'),
      user: auth.connected.id,
    };

    fetch('http://localhost:1337/posts', {
      method: 'post',
      headers: {
        'Authorization': `Bearer ${auth.connected.token}`, 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      console.log(data)
      if(response.error) {
      } else {
      }
    })
  }

  return (
    <div className='Contener'>
      <div className="Title">
        <h1 >Twish l'appli des amis de wish</h1>
      </div>
      {auth.connected.connected && (
        
        <div className="Form">
          <form action="post">
            <div>
              <label htmlFor="input-text">Ici tu peux y écrire n'importe quoi</label>
            </div>
            <TextareaAutosize
              type="text"
              value={text}
              aria-label="empty textarea"
              placeholder="Empty"
              style={{ width: 200 }}
              onChange={(e) => settext(e.target.value)}
            />
            {/* <input type="text" value={text} onChange={(e) => settext(e.target.value)} id='input-text' /> */}
            <div>
              <button type="button" onClick={() => changetext()}>Envoyer</button>
            </div>
          </form>
        </div>           
      )}
      <Post />        
    </div>
  )
}
