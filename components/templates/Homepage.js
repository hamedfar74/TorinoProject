import Featurs from "../elements/Featurs";
import Slider from "../elements/Slider";
import CallUs from "../modules/CallUs";
import Search from "../modules/Search";
import Tours from "../modules/Tours";
import WhyUs from "../modules/WhyUs";

import styles from "./Homepage.module.css";

const Homepage = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <img src="/banner.svg" alt="banner" />
      </div>
      <div className={styles.subContainer}>
        <h1>تورینو برگزار کننده بهترین تور های داخلی و خارجی</h1>
        <Search />
        <Tours />
        <CallUs />
        <WhyUs />
        <Featurs />
      </div>
    </div>
  );
};

export default Homepage;
