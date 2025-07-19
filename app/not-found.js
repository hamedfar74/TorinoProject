"use client";
import styles from "./not-found.module.css";
import Link from "next/link";
const PageNotFound = () => {
  return (
    <div className={styles.container}>
      <img src="/icons/Error-TV.svg" alt="404-pic" />
      <h3>صفحه مورد نظر یافت نشد!</h3>
      <Link href="/">
        <p>بازگشت به صفحه اصلی</p>
      </Link>
    </div>
  );
};

export default PageNotFound;
