import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const Comment = (props) => {
  const [picture, setPicture] = useState('');
  const { name, email, body } = props.comment;

  useEffect(() => {
    loadPictures();
  }, []);

  const loadPictures = async () => {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();
    setPicture(data.results[0].picture.large);
  };
  return (
    <div className='comment'>
      <Box display='flex' flexDirection='row' className='user'>
        <img src={picture} alt='user' />
        <h3>{name}</h3>
     </Box>
          <h6>{email}</h6>
          <Typography variant="body1" gutterBottom>{body}</Typography>
    </div>
  );
};

export default Comment;
