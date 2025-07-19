"use client";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <div className={styles.container}>
      <button>
        <img src="/icons/login.svg" alt="Login icon" />
      </button>
      <button>
        <img src="/icons/Ham-menu.svg" alt="menu" />
      </button>
    </div>
  );
};

export default Header;
