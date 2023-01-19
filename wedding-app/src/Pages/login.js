import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/auth.slice';

export default function LoginPage() {


  const dispatch = useDispatch()
  

  

  const [value, setValue] = useState({
    id : "",
    password : ""
  })

  function handleChange(e) {
    setValue({
      ...value,
      [e.target.name] : e.target.value
    })
    // console.log(value);
  }


  async function login() {
    const res = await axios.post("http://localhost:8001/login", value)
    // alert(res.data.message)
    if(res.data.user) {
      dispatch(loginUser())
    }
  }

  return (
    <div className="login-div flex-column-centered">
  <div className="login-comps">
    <h1 className="text-center">Login</h1>
    <form className="flex-column-centered">
      <input type="text" name="id" id="id" placeholder="ID" required 
      value={value.id}
      onChange={handleChange}
      />
      <input type="password" name="password" id="password" placeholder="Password" required 
      value={value.password}
      onChange={handleChange}
      />
      <button type="button" onClick={login}>login</button>
    </form>
  </div>
</div>
  )
}
