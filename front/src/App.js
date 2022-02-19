import React from 'react';
import { useEffect } from 'react';
import {Container,AppBar,Grow,Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import useStyles from './styles';
import  {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';
const App=()=>{
  const classes=useStyles();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getPosts);
  },[dispatch])
  return (
    <div>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static'>
          <h3 className={classes.heading} align='center'>Operator Vehicle Manager</h3>
        </AppBar>
        <Grow in>
          <Container>
            <Grid item >
              <Grid item xs={12} sm={4}>
                <Form/>
              </Grid>
              <Grid item xs={12} sm={7}>
                <Posts/>
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>
  );
}

export default App;
