import { Box, Button, Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Comments from './Comments';

const PostDetails = () => {
    const { postId } = useParams();
    const [post, setPost] = useState([]);
    const { title, body } = post;
    const [user, setUser] = useState([]);
    const history = useHistory();

    const handleClick = () => {
        history.push('/home');
    }

    useEffect(() => { 
        getPost();
    }, []);


    const getPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.json();
        const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${data.userId}`);
        const userData = await userResponse.json();
        setUser(userData);
        setPost(data);
    }

    return (
        <Container>
            <Box>
                <h4>Post By: {user.name}</h4>
                <h5>User Name: @{user.username}</h5>
                <h5>Mail: {user.email}</h5>
            </Box>
            <hr />
            <h4>{title}</h4>
            <p>{body}</p>
            <hr />
            <Comments id={postId} />
            <hr />
            <Box textAlign='center'>
            <Button variant="contained" color="primary" onClick={handleClick}>Back To Home</Button>
            </Box>
        </Container>
    );
};

export default PostDetails;