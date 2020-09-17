import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginBottom: 20,
        backgroundColor: 'honeydew'
    },
    title: {
      fontSize: 16,
    },
    pos: {
      marginBottom: 12,
    },
  });

const AllPosts = props => {
    const { id, title, body } = props.post;
    const history = useHistory();
    const classes = useStyles();
    
    const handleClick = id => {
        history.push(`/post/${id}`);
    }
    return (
        <Container mb={15}>
        <Card className={classes.root}>
        <CardContent>
          <Typography color="textSecondary" variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography>
            {body}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={()=>handleClick(id)}>See More</Button>
        </CardActions>
      </Card>
        </Container>
    );
};

export default AllPosts;