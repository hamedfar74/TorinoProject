"use client";

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";

import AuthModal from "./AuthModal";
import ProfileButton from "../elements/ProfileButton";

import styles from "./Header.module.css";

import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const [ham, setHam] = useState(false);
  
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
      {ham ? (
        <div
          className={`${styles.menu} ${ham ? styles.openHam : null}`}
          onClick={() => setHam(false)}
        >
          <ul>
            <li>
              <Link href="/">صفحه اصلی</Link>
            </li>
            <li>
              <Link href="/">خدمات گردشگری</Link>
            </li>
            <li>
              <Link href="/">درباره ما</Link>
            </li>
            <li>
              <Link href="/">تماس با ما</Link>
            </li>
          </ul>
        </div>
      ) : (
        <button className={styles.secondBt} onClick={() => setHam(true)}>
          <Image width={24} height={24} src="/icons/Ham-menu.svg" alt="menu" />
        </button>
      )}
      {checkLogin ? (
        <ProfileButton />
      ) : (
        <button className={styles.firstBt} onClick={() => setIsopen(true)}>
          <Image width={24} height={24} src="/icons/login.svg" alt="Login icon" />
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
