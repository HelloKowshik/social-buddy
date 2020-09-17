import { Box, Button, Container, Typography } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push('/home');
    }
    return (
        <Container>
            <Box textAlign='center'>
                <Typography variant='h1' component='h1'>404-Not Found</Typography>
                <Button variant="contained" color="primary" onClick={handleClick}>Back To Home</Button>
            </Box>
        </Container>
    );
};

export default NotFound;