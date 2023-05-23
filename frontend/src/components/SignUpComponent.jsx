import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link,useNavigate } from "react-router-dom";
import { RxAvatar } from "react-icons/rx";
import axios from "axios"; 
import {server}from "../server"
import { toast } from "react-toastify";

const SignUpComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState(null);
  // const navigate=useNavigate()

  const handleSubmit = async(e) => {
    e.preventDefault();

    const config={
      headers:{"Content-Type":"multipart/form-data"}
    };
    const newForm=new FormData();
    newForm.append("file",avatar);
    newForm.append("name",name);
    newForm.append("email",email);
    newForm.append("password",password);
    axios.post(`${server}/user/create-user`,newForm,config).then((res)=>{
      
      toast.success(res.data.message)
      setEmail('');
      setName('');
      setPassword('');
      setAvatar(null)


      // if(res.data.success === true){
      //   navigate('/')
      // }
    }).catch((err)=>{
      toast.error(err.response.data.message)
     
    })

  };
  const handleFileInput = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
    console.log("handleFileInput", file);
  };

  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            name="name"
            autoComplete="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email Adress</label>
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
          <label htmlFor="avatar">Avatar : </label>
          <span>
            {avatar ? (
              <img src={URL.createObjectURL(avatar)} alt="avatar" />
            ) : (
              <RxAvatar />
            )}
          </span>
          <label htmlFor="file-input">
            <span>UploadFile</span>
            <input type="file" name="avatar" id="file-input" accept=".jpg, .jpeg, .png" onChange={(e)=>handleFileInput(e)} />
          </label>
        </div>
        <div>
          <button type="submit">
            sign up
          </button>
        </div>
      </form>
      <div>
        <h4>
          have already an account? <Link to="/login">Login.</Link>
        </h4>
      </div>
    </div>
  );
};

export default SignUpComponent;
