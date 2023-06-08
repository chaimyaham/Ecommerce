import React, { useEffect, useState } from "react";

import styles from "../styles/styles";
import Loader from "../components/Loader";

import { useSelector } from "react-redux";
import UserInfo from "../components/UserInfo";
import ProfileSideBar from "../components/ProfileSideBar";
import ProfileContent from "../components/ProfileContent";

const ProfilePage = () => {
    const { loading } = useSelector((state) => state.user);
    const [active, setActive] = useState(1);
  
    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
          <>
            <UserInfo />
            <div className={` flex bg-[#f5f5f5]`}>
              <div className="w-[50px] 800px:w-[335px] sticky 800px:mt-0 mt-[18%]">
                <ProfileSideBar active={active} setActive={setActive} />
              </div>
              <ProfileContent active={active} />
            </div>
          </>
        )}
      </div>
    );
  };
export default ProfilePage;
