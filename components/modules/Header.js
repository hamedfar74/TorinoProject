"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";

import AuthModal from "./AuthModal";
import ProfileButton from "../elements/ProfileButton";

import styles from "./Header.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const router = useRouter()
  const searchParams = useSearchParams();
  const redirected = searchParams.get("redirected");

  useEffect(() => {
    
    if (redirected === "unauthorized") {
      toast.error("برای دسترسی به این صفحه ابتدا وارد شوید !");
    }
    if (redirected === "emptyBasket") {
      toast.error("سبد خرید شمال خالیست")
    }
     const newUrl = window.location.pathname;
      router.replace(newUrl);
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) setIsopen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, redirected]);

  const handleOutSideClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsopen(false);
    }
  };

  const { isLoggedIn } = useAuth();

  const checkLogin = isLoggedIn();

  return (
    <div className={styles.container}>
      <button className={styles.secondBt}>
        <img src="/icons/Ham-menu.svg" alt="menu" />
      </button>
      {checkLogin ? (
        <ProfileButton />
      ) : (
        <button className={styles.firstBt} onClick={() => setIsopen(true)}>
          <img src="/icons/login.svg" alt="Login icon" />
        </button>
      )}
      {isOpen && (
        <div className={styles.modalOverlay} onClick={handleOutSideClick}>
          <AuthModal isOpen={isOpen} setIsopen={setIsopen} />
        </div>
      )}
    </div>
  );
};

export default Header;
