import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import AllPosts from './AllPosts';

const ApiData = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => { 
        loadPosts();
    }, []);

    const loadPosts = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        setPosts(data);
    }
    
    return (
        <Container>
            {
                posts.map(post=>(<AllPosts post={post} key={post.id} />))
            }
        </Container>
    );
};

export default ApiData;