"use client";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import AuthModal from "./AuthModal";
import { useAuth } from "../context/AuthProvider";
import ProfileButton from "../elements/ProfileButton";
const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isOpen) setIsopen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);
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
