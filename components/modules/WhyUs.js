import Slider from "../elements/Slider";
import styles from "./WhyUs.module.css";
const WhyUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <span className={styles.question}>
          <img src="icons/question.svg" />
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
