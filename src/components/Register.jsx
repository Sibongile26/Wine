import React, { useContext, useState } from 'react'
import MyContext from '../context/MyContext' // add MyContext

function Register() {

  const [data, setData] = useContext(MyContext);

  console.log(data)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  function AddUser() {

    console.log("test")

  }

  return (
    <div>
      <h2>Register</h2>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name='email'
            defaultValue={data.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name='password'
            defaultValue={data.password}
            onChange={handleChange}

          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={AddUser}>Register</button>

        <br />
        <a href="/login">Have account already? Login here</a>
      </form>
    </div>
  )
}

export default Register