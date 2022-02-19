import { useState } from "react"
import { useContext } from "react";
import { useNavigate} from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { TextField,Button,Typography,Paper } from "@material-ui/core";
export const Login=()=>{
 const [form,setForm]=useState({});
 const {handleToken}=useContext(AuthContext)
 const navigate=useNavigate();
 const handleChange=({target:{name,value}})=>{
     setForm({
         ...form,
         [name]: value
     })
 }
 return (
<div>
  <TextField label="enter email" variant="outlined" fullWidth type="text" onChange={handleChange} name="email" placeholder="enter email" style={{margin:"10px"}}/>
  <TextField label="enter password"  variant="outlined" fullWidth type="text" onChange={handleChange} name="password" placeholder="enter password" style={{margin:"10px"}}/>
  <Button variant="contained" color="secondary" size="large"  onClick={()=>{
     try{
      fetch("https://reqres.in/api/login",{
        method:"POST",
        body:JSON.stringify(form)
      });
      handleToken("123456789");
      navigate(-1);
    }catch{
      //
    }
  }}>Signin</Button>
</div>
 );
}