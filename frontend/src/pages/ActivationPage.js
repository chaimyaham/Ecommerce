import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { server } from '../server';

const ActivationPage = () => {
  const  {activationToken}=useParams();
  const [error,setError]=useState(false);
  useEffect(()=>{
    if(activationToken){
      const activationEmail=async()=>{
        try {
          const res=await axios.post(`${server}/user/activation`,{
            activationToken,
          });
          console.log(res.data.message);
        } catch (err) {
          console.log(err.response.data.message);
          setError(true)
          
        };
      };
      activationEmail();


    }
  },[]);
  return (
    <div>
      { error?(
        <p>
          Your token is expired. Please try again
        </p>

      ):(
        <p>
          Your account has been created successfully.

        </p>
      ) }
    </div>
  )
}

export default ActivationPage