import React from 'react'
import { useState } from 'react'
import API from '../services/api'

const Signup = () => {
    const[name,setName] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");

    const handleSignup = async (e)=>{
        e.preventDefault();

        try{
            const res = await API.post('/user/register',{
                name,
                email,
                password
            });

            //save token
      localStorage.setItem("token", res.data.token);

      alert("user Registered successfully🔥")
        }catch(err){
            alert("user not Registered ❌")
        }
    }
  return (
    <div>
          <h2>Sign up</h2>
      <form onSubmit={handleSignup}>
     
     <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
    <br /><br />
    
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

 
        <input
          type="password"
          placeholder="Enter password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>
        </div>
  )
}

export default Signup