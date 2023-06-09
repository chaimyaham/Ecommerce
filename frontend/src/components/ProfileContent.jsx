import React, { useEffect, useState } from 'react'
import { AiOutlineCamera } from 'react-icons/ai'
import { backend_url, server } from '../server'
import { useDispatch, useSelector } from 'react-redux';
import TrackOrder from './TrackOrder';
import styles from '../styles/styles';
import { toast } from 'react-toastify';
import axios from 'axios';
import {
  deleteUserAddress,
  loadUser,
  updatUserAddress,
  updateUserInformation,
} from "../redux/actions/user";

const ProfileContent = ({active}) => {
    const { user, error, successMessage } = useSelector((state) => state.user);
    const [name, setName] = useState(user && user.name);
    const [email, setEmail] = useState(user && user.email);
    const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
    const [password, setPassword] = useState("");
    const [avatar, setAvatar] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
      if (error) {
        toast.error(error);
        dispatch({ type: "clearErrors" });
      }
      if (successMessage) {
        toast.success(successMessage);
        dispatch({ type: "clearMessages" });
      }
    }, [error, successMessage]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(updateUserInformation(name, email, phoneNumber, password));
    };
  
    const handleImage = async (e) => {
      const file = e.target.files[0];
      setAvatar(file);
  
      const formData = new FormData();
  
      formData.append("image", e.target.files[0]);
  
      await axios
        .put(`${server}/user/update-avatar`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        })
        .then((response) => {
           dispatch(loadUser());
           toast.success("avatar updated successfully!");
        })
        .catch((error) => {
          toast.error(error);
        });
    };
  
  return (
    <div className='w-full pt-5 '>
      {active===1 && (
        <>
        <div className="flex justify-center w-full">
            <div className="relative">
              <img
                src={`${backend_url}${user?.avatar}`}
                className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-[#8C2A8E] "
                alt=""
              />
              <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[5px] right-[5px]">
                <input
                  type="file"
                  id="image"
                  className="hidden"
                 onChange={handleImage}
                />
                <label htmlFor="image">
                  <AiOutlineCamera />
                </label>
              </div>
            </div>
          </div>

          <div className="w-full px-5 mt-10">
            <form onSubmit={handleSubmit} aria-required={true}>
              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Full Name</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0 px-3 `}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Email Address</label>
                  <input
                    type="text"
                    className={`${styles.input} !w-[95%] mb-1 800px:mb-0 px-3`}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full 800px:flex block pb-3">
                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Phone Number</label>
                  <input
                    type="number"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0 px-3`}
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-2">Enter your password</label>
                  <input
                    type="password"
                    className={`${styles.input} !w-[95%] mb-4 800px:mb-0 px-3`}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <input
                className={` w-[250px] h-[40px] border border-[#8C2A8E] text-center text-[#8C2A8E] rounded-md mt-8 cursor-pointer hover:bg-[#8C2A8E] hover:text-white duration-300 `}
                required
                value="Save Changes"
                type="submit"
              />
            </form>
          </div>
        </>
      )}
         {active === 5 && (
        <div>
          <TrackOrder />
        </div>
      )}
    </div>
  )
}

export default ProfileContent
