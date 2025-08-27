import Image from "next/image";
import Slider from "../elements/Slider";
import styles from "./WhyUs.module.css";
const WhyUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <div className={styles.title}>
          <span className={styles.question}>
            <Image
              width={34}
              height={38}
              src="icons/question.svg"
              alt="q-icon"
            />
            <span>؟</span>
          </span>
          <h2>
            چرا <span>تورینو</span>؟
          </h2>
        </div>
        <div className={styles.webExtraInfo}>
          <h3>تور طبیعت گردی و تاریخی </h3>
          <p>
            اگر دوست داشته باشید که یک جاذبه طبیعی را از نزدیک ببینید و در دل
            طبیعت چادر بزنید یا در یک اقامتگاه بوم گردی اتاق بگیرید، باید تورهای
            طبیعت‌گردی را خریداری کنید. اما اگر بخواهید از جاذبه‌های گردشگری و
            آثار تاریخی یک مقصد خاص بازدید کنید، می‌توانید تورهای فرهنگی و
            تاریخی را خریداری کنید.
          </p>
        </div>
      </div>
      <Slider className={styles.slider} />
    </div>
  );
};

export default WhyUs;
