import React, { useState } from 'react';
import './login.css';
import axios from 'axios';

export default function LoginPage() {

  const [value, setValue] = useState({
    id : "",
    password : ""
  })

  function handleChange(e) {
    setValue({
      ...value,
      [e.target.name] : e.target.value
    })
    console.log(value);
  }


  async function login() {
    const res = await axios.post("http://localhost:8001/login", value)
    alert(res.data.message)
  }

  return (
    <div class="login-div flex-column-centered">
  <div class="login-comps">
    <h1 class="text-center">Login</h1>
    <form class="flex-column-centered">
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
