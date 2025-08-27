"use client";
import Image from "next/image";
import styles from "./Footer.module.css";
import { e2p } from "@/utils/numbers";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.webDesignContainer}>
        <div className={styles.submenu1}>
          <div className={styles.box}>
            <h3>تورینو</h3>
            <p>درباره ما</p>
            <p>تماس با ما</p>
            <p>چرا تورینو</p>
            <p>بیمه مسافرتی</p>
          </div>
          <div className={styles.box}>
            <h3>خدمات مشتریان</h3>
            <p>پشتیبانی آنلاین</p>
            <p>راهنمای خرید</p>
            <p>راهنمای استرداد</p>
            <p>پرسش و پاسخ</p>
          </div>
        </div>
        <div className={styles.submenu2}>
          <div className={styles.logo}>
            <span>
              <Image
                width={100}
                height={30}
                src="/icons/Torino1.svg"
                alt="Torino-Logo"
              />
            </span>
            <div>
              <p>تلفن پشتیبانی:</p>
              <p>{e2p("021-8574")}</p>
            </div>
          </div>
          <div className={styles.refLinks}>
            <div className={styles.refLogoContainer}>
              <Image fill src="/icons/aira-682b7c43.svg" alt="aria.ir" />
            </div>
            <div className={styles.refLogoContainer}>
              <Image
                fill
                src="/icons/samandehi-6e2b448a.svg"
                alt="samandehi.ir"
              />
            </div>
            <div className={styles.refLogoContainer}>
              <Image fill src="/icons/ecunion-35c3c933.svg" alt="ecunion.ir" />
            </div>
            <div className={styles.refLogoContainer}>
              <Image
                fill
                src="/icons/passenger-rights-48368f81.svg"
                alt="cao.ir"
              />
            </div>
            <div className={styles.refLogoContainer}>
              <Image
                fill
                src="/icons/state-airline-f45c55b2.svg"
                alt="caa.gov.ir"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.rights}>
        <p>کلیه حقوق این وب سایت متعلق به تورینو میباشد.</p>
      </div>
    </div>
  );
};

export default Footer;
