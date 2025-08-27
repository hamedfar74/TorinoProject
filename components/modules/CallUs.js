"use client";
import { e2p } from "@/utils/numbers";
import styles from "./CallUs.module.css";
import Image from "next/image";
const CallUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.topBox}>
          <div className={styles.typo}>
            <h3>
              خرید تلفنی از <span>تورینو</span>
            </h3>
            <p>به هرکجا که میخواهید!</p>
          </div>
          <div className={styles.photo}>
            <Image fill src="/professional-cartoon-man-talking-phone-icon.svg" alt="cartoon-guy" />
          </div>
          
        </div>
        <div className={styles.bottomBox}>
          <div>
            {e2p("021-1840")}
            <span className={styles.phoneIcon}>
            <Image fill src="/icons/call.svg" alt="call" />

            </span>
          </div>
          <button> اطلاعات بیشتر</button>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
