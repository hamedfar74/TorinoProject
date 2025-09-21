"use client";
import { redirect, usePathname, useRouter } from "next/navigation";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import ProfileTab from "../modules/ProfileTab";
import ToursTab from "../modules/ToursTab";
import TransactionsTab from "../modules/TransactionsTab";
import styles from "./ProfilePage.module.css"
import Image from "next/image";

const ProfilePage = () => {
  // const [activeTab, setActiveTab] = useState("profile");
  const {isLoggedIn} = useAuth();
  const pathname = usePathname()
  const checkLoggedin = isLoggedIn()
  const router = useRouter()
 
  useEffect(()=> {
    // const checkLog = async () => {
    //   if ( await !checkLoggedin && (pathname !== "/404")) return await redirect("/?redirected=unauthorized")
    //   }
    
    const checkLog = async() => {
      try {
        // if (!checkLoggedin) return router.replace("/?redirected=unauthorized")
        // if ( !checkLoggedin && (pathname !== "/404")) return redirect("/?redirected=unauthorized")
      } catch (error) {
        console.log(error)
      }
    }
    checkLog()
  },[checkLoggedin , pathname])
  
  return (
    <div className={styles.container}>
      {/* <div className={styles.buttons}>
        <button className={activeTab === "profile" ? styles.activated : null} onClick={() => setActiveTab("profile")}><Image width={16} height={16} src="icons/gray-profile.svg" alt="profile-icon" />پروفایل</button>
        <button className={activeTab === "myTours" ? styles.activated : null} onClick={() => setActiveTab("myTours")}><Image width={16} height={16} src="icons/sun-fog.svg" alt="tour-icon" />تورهای من</button>
        <button className={activeTab === "transactions" ? styles.activated : null} onClick={() => setActiveTab("transactions")}><Image width={16} height={16} src="icons/convert-card.svg" alt="transaction-icon" />تراکنش ها</button>
      </div>
      <div className={styles.tabs}>
        {activeTab === "profile" && <ProfileTab />}
        {activeTab === "myTours" && <ToursTab />}
        {activeTab === "transactions" && <TransactionsTab />}
      </div> */} 
      <ProfileTab className={styles.profileTab} />
    </div>
  );
};

export default ProfilePage;
