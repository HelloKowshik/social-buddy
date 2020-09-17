import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Comment from './Comment';

const Comments = ({ id }) => {
    
    const [comments, setComments] = useState([]);
    useEffect(() => { 
        loadComments();
    }, []);

    const loadComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const data = await response.json();
        setComments(data);
    }
    return (
        <Container>
            <h3>All Comments</h3>
            {
                comments.map(comment => (<Comment key={comment.id} comment={comment} />))
            }
        </Container>
    );
};

export default Comments;