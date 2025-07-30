"use client";

import api from "@/core/configs/api";
import { useEffect, useState } from "react";

import styles from "./ProfileButton.module.css";
import { e2p } from "@/utils/numbers";
import { useAuth } from "../context/AuthProvider";
import { useRouter } from "next/navigation";
import { useGetProfileData } from "@/core/services/queries";

const ProfileButton = () => {
  const [user, setUser] = useState("");
  const [dropdown, setDropdown] = useState(false);

  const { LogoutHandler } = useAuth();
  const { data, isPending, isError } = useGetProfileData();
  

  const router = useRouter();
  useEffect(() => {
    if (!isPending && data?.data) setUser(data?.data);
  }, [isPending, data]);

  const converted = e2p(+user?.mobile);

  const profileHandler = () => {
    setDropdown(false);

    router.push("/profile");
  };
  const logoutHandler = () => {
    setUser("");
    setDropdown(false);
    LogoutHandler();
  };
  return (
    <div
      className={styles.container}
      onClick={() => setDropdown((dropdown) => !dropdown)}
    >
      <div className={styles.profile}>
        <img src="/icons/profile.svg" alt="profile" />
        {isPending && <span>Loading...</span>}
        {converted && <span>{`۰${converted}`}</span>}
        <img
          src="/icons/green-arrow-down.svg"
          alt="arrow"
          className={dropdown ? styles.downsvg : null}
        />
      </div>
      {dropdown && (
        <div className={styles.dropDown}>
          <div className={styles.avatar}>
            <span>
              <img src="/icons/gray-profile.svg" />
            </span>
            {converted && <p>{`۰${converted}`}</p>}
          </div>
          <div className={styles.profileInfo} onClick={profileHandler}>
            <img src="/icons/empty-profile.svg" />
            <p>اطلاعات حساب کاربری</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.logout} onClick={logoutHandler}>
            <img src="/icons/logout.svg" />
            <p>خروج از حساب کاربری</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
