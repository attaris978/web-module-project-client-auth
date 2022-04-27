import React, { useState } from "react";
import { login } from "./apiFetch";
import {Redirect,useHistory} from 'react-router-dom';

const Login = (props) => {
    const {history, setLoginStatus} = props;
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(creds);
    setCreds(
        {
            username: "",
            password: "",
          }     
    );
    setLoginStatus(true);
    history.push('/friendList')
    // <Redirect to='/friendsList' />
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1>LOGIN</h1>
      <label htmlFor="username">USERNAME</label>
      <input
        type="text"
        name="username"
        value={creds.username}
        onChange={(e) => setCreds({ ...creds, username: e.target.value })}
      />
      <label htmlFor="password">PASSWORD</label>
      <input
        type="password"
        name="password"
        value={creds.password}
        onChange={(e) => setCreds({ ...creds, password: e.target.value })}
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
};

export default Login;
