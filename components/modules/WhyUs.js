import Image from "next/image";
import Slider from "../elements/Slider";
import styles from "./WhyUs.module.css";
const WhyUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.question}>
          <Image width={34} height={38} src="icons/question.svg" alt="q-icon"/>
          <span>؟</span>
        </span>
        <h2>
          چرا <span>تورینو</span>؟
        </h2>
      </div>
      <Slider />
    </div>
  );
};

export default WhyUs;
