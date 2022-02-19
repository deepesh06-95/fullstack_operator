import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import {AiOutlineDelete,AiOutlineFileAdd} from 'react-icons/ai';


import moment from 'moment';
import { useDispatch } from 'react-redux';

// import { deletePost } from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post}) => {

  const classes = useStyles();
console.log("post",post );
  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} title={post.vehicle} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.vehicle}</Typography>
        <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => {}}><AiOutlineFileAdd fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary" component="h2">{post.registration.map((type) => `#${type} `)}</Typography>
      </div>
      <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.trips}</Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.type}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        {/* <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><AiOutlineDelete fontSize="small" /> Delete</Button> */}
        <Button size="small" color="primary" ><AiOutlineDelete fontSize="small" /> Delete</Button>
      </CardActions>
    </Card>
  );
};

export default Post;