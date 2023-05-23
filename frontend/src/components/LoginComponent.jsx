import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <h2>Login to your account</h2>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type={visible ? "text" : "password"}
            name="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {visible ? (
            <AiOutlineEye onClick={() => setVisible(false)} />
          ) : (
            <AiOutlineEyeInvisible onClick={() => setVisible(true)} />
          )}
        </div>
        <div>
            <div><input type="checkbox" name="remember-me" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label></div>
            <a href="#">Forgot yout password?</a>
        </div>
        <div>
            <button type="submit">
                Login
            </button>
        </div>
      </form>
      <div>
        <h4>Not have any account?  <Link to='/sign-up'>Sign up.</Link></h4>
       
      </div>
    </div>
  );
};

export default LoginComponent;
