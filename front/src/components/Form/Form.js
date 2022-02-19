import React from "react";
import { useState } from "react";
import { TextField,Button,Typography,Paper } from "@material-ui/core";
import useStyles from './styles';
import FileBase from 'react-file-base64';
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";

const Form=()=>{
    const [postData,setPostData]=useState({
        vehicle:'',type:'',trips:'',registration:'',selectedFile:''
    });
    const classes=useStyles();
    const dispatch=useDispatch();
    const handleSubmit=(e)=>{
     e.preventDefault();
     dispatch(createPost(postData));
    }
    const clear=()=>{

    }
    return (
        <Paper className="classes.paper">
            <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Enter the operator details</Typography>
                <TextField name="vehicle" label="Vehicle" fullWidth value={postData.vehicle} onChange={(e)=>setPostData({...postData,vehicle:e.target.value})}/>
                <TextField name="type" label="Type" fullWidth value={postData.type} onChange={(e)=>setPostData({...postData,type:e.target.value})}/>
                <TextField name="trips" label="Trips" fullWidth value={postData.trips} onChange={(e)=>setPostData({...postData,trips:e.target.value})}/>
                <TextField name="registration" label="Registration" fullWidth value={postData.registration} onChange={(e)=>setPostData({...postData,registration:e.target.value})}/>
                <div className={classes.fileInput}>
                    <FileBase type="file" multiple={false} onDone={({base64})=>setPostData({...postData,selectedFile:base64})}/>
                </div>
                <Button className={classes.buttonSubmit} variant="contained" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small"  onClick={clear} fullWidth>clear</Button>
            </form>
        
        </Paper>
    )
}
export default Form;