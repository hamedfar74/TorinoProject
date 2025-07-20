"use client";
import { e2p } from "@/utils/numbers";
import styles from "./CallUs.module.css";
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
            <img src="/professional-cartoon-man-talking-phone-icon.svg" />
          </div>
          {/* <img src="/professional-cartoon-man-talking-phone-icon.svg" /> */}
        </div>
        <div className={styles.bottomBox}>
          <span>
            {e2p("021-1840")}
            <img src="/icons/call.svg" alt="call" />
          </span>
          <button> اطلاعات بیشتر</button>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
