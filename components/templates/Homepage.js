import Image from "next/image";
import Featurs from "../elements/Featurs";
import CallUs from "../modules/CallUs";
import Search from "../modules/Search";
import Tours from "../modules/Tours";
import WhyUs from "../modules/WhyUs";

import styles from "./Homepage.module.css";
import ToastHandler from "../elements/ToastHandler";

const Homepage = () => {
  
  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Image fill src="/banner.svg" alt="banner" />
      </div>
      <div className={styles.subContainer}>
        <h1><span>تورینو </span>برگزار کننده بهترین تور های داخلی و خارجی</h1>
        {/* <h1>تورینو برگزار کننده بهترین تور های داخلی و خارجی</h1> */}
        <Search />
        <Tours />
        <CallUs />
        {/* <WhyUs /> */}
        <Featurs />
      </div>
      <ToastHandler />
    </div>
  );
};

export default Homepage;
