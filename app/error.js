"use client";
import Image from "next/image";
import styles from "./error.module.css";
export default function Error() {
  return (
    <div className={styles.container}>
      <Image width={300} height={300} src="/icons/Error-Lamp-Robot.svg" alt="robot" />
      <div>
        <h3>اتصال با سرور برقرار نیست!</h3>
        <p>لطفا بعدا دوباره امتحان کنید.</p>
      </div>
    </div>
  );
}
