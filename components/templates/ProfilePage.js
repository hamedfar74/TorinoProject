"use client";
import { redirect, useRouter } from "next/navigation";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import ProfileTab from "../modules/ProfileTab";
import ToursTab from "../modules/ToursTab";
import TransactionsTab from "../modules/TransactionsTab";
import styles from "./ProfilePage.module.css"

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const {isLoggedIn} = useAuth();

  useEffect(()=> {
    const checkLog = async () => {
      if (await !isLoggedIn) return redirect("/?redirected=unauthorized")
    }
    checkLog()
  },[isLoggedIn])
  
  
  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        <button className={activeTab === "profile" ? styles.activated : null} onClick={() => setActiveTab("profile")}><img src="icons/gray-profile.svg"/>پروفایل</button>
        <button className={activeTab === "myTours" ? styles.activated : null} onClick={() => setActiveTab("myTours")}><img src="icons/sun-fog.svg"/>تورهای من</button>
        <button className={activeTab === "transactions" ? styles.activated : null} onClick={() => setActiveTab("transactions")}><img src="icons/convert-card.svg"/>تراکنش ها</button>
      </div>
      <div className={styles.tabs}>
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "myTours" && <ToursTab />}
        {activeTab === "transactions" && <TransactionsTab />}
      </div>
    </div>
  );
};

export default ProfilePage;
