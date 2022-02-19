import { Link } from "react-router-dom";
import { AuthContext } from '../contexts/AuthContext';
 import { useContext } from "react";
 import {Container,AppBar,Grow,Grid} from '@material-ui/core';
 import useStyles from '../styles';
export const Navbar=()=>{
    const { token }= useContext(AuthContext);
    const classes=useStyles();
    return (
        <Container maxWidth="lg">
        <AppBar className={classes.appBar} position='static'>
            <Link to="/" style={{margin:"10px"}} className={classes.heading}><h3>Home</h3></Link>
            <Link to="/op" style={{margin:"10px"}} className={classes.heading}><h3>Operator list</h3></Link>
            <Link to="/login" style={{margin:"10px"}} className={classes.heading}><h3>Login</h3></Link>
            <Link to="/signout" style={{margin:"10px"}} className={classes.heading}><h3>Signout</h3></Link>
            <h3 style={{margin:"10px"}}>Status:{token?"Logged in":"Logged out"}</h3>
            </AppBar>
        </Container>
    );
}