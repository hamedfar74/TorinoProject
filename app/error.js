"use client";
import styles from "./error.module.css";
const error = () => {
  return (
    <div className={styles.container}>
      <img src="/icons/Error-Lamp-Robot.svg" />
      <h3>اتصال با سرور برقرار نیست!</h3>
      <p>لطفا بعدا دوباره امتحان کنید.</p>
    </div>
  );
};

export default error;
