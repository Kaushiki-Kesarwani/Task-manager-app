import React from 'react'
import {useState} from "react";
import API from '../services/api';

const Login = () => {
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleLogin = async (e)=>{
        e.preventDefault();
    }
  return (
    <div>Login</div>
  )
}

export default Login