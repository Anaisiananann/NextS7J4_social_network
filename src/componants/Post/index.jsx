import React, {useState} from 'react';
import CardBorder from '../../componants/Card';

export default function Post() {

  const [onePost, setOnePost] = useState([]);
  
  if (onePost.length === 0) {
    fetch('http://localhost:1337/posts', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      setOnePost(response)
    })

    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }
  
  else {
    return (
      <div className='Project'>
        <h1>Liste des projets samere</h1>
        {onePost.map((data, id) => {
          return (
            <div key={id}>
              <CardBorder key={id} data={data} />
            </div>
          );
        })}
      </div>
    )
  }

}