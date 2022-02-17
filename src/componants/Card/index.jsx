import React from 'react';
import {Card, CardContent, Typography} from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function CardData(props) {
  const {data} = props;

  const auth = useSelector(state => state);

  return (
    <div>
      <Card sx={{ minWidth: 275 }} className='BoardCard'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} gutterBottom>
            
          </Typography>
          <Typography variant="h5" component="div">
            Article
          </Typography>
          <Typography sx={{ mb: 1.5 }} >
            {data.text}
          </Typography>
          {auth.connected.connected && (
            <Typography variant="body2">
              écrit par : <Link to={`/users/${data.user.id}`}>{data.user.username}</Link>
            </Typography>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default CardData;
