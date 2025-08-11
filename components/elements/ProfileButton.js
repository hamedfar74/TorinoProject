"use client";

import { useEffect, useState } from "react";

import styles from "./ProfileButton.module.css";
import { e2p } from "@/utils/numbers";
import { useAuth } from "../context/AuthProvider";
import { useRouter } from "next/navigation";
import { useGetProfileData } from "@/core/services/queries";
import Image from "next/image";

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
        <Image width={16} height={16} src="/icons/profile.svg" alt="profile" />
        {isPending && <span>Loading...</span>}
        {converted && <span>{`۰${converted}`}</span>}
        <Image width={16} height={16}
          src="/icons/green-arrow-down.svg"
          alt="arrow"
          className={dropdown ? styles.downsvg : null}
        />
      </div>
      {dropdown && (
        <div className={styles.dropDown}>
          <div className={styles.avatar}>
            <span>
              <Image width={16} height={16} src="/icons/gray-profile.svg" alt="profile-icon" />
            </span>
            {converted && <p>{`۰${converted}`}</p>}
          </div>
          <div className={styles.profileInfo} onClick={profileHandler}>
            <Image width={16} height={16} src="/icons/empty-profile.svg" alt="profile-icon" />
            <p>اطلاعات حساب کاربری</p>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.logout} onClick={logoutHandler}>
            <Image width={16} height={16} src="/icons/logout.svg" alt="logout-icon" />
            <p>خروج از حساب کاربری</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileButton;
