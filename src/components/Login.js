import React, { useState } from "react";
import { login } from "./apiFetch";

const Login = () => {
  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(creds);
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
