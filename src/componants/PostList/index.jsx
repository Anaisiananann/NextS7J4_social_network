import React, { useState } from 'react';
import Card from '../../componants/Card';

const PageList = ({user}) => {

  const [onePost, setOnePost] = useState([]);

  const handleRefreshLike = () => {
    setOnePost([]);
  }

  if (onePost.length === 0) {
    fetch('http://localhost:1337/posts?_sort=created_at:desc', {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((response) => {
      setOnePost(response);
    })
    
    return (
      <div >
       <p>Loading...</p>
      </div>
    );
  }
  
  else {
    return (
      <div>
        <h2> Liste de tes morts </h2>
        {onePost.map((data, id) => {
          return (
            !user ? <Card key={id} data={data} onRefresh={handleRefreshLike} /> : data.user.id === user.id && <Card key={id} data={data} onRefresh={handleRefreshLike} />
          )
        })}
      </div>
    )
  }
  
};

export default PageList;