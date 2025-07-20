import Slider from "../elements/Slider";
import TourSkeleton from "../elements/TourSkeleton";
import AuthModal from "../modules/AuthModal";
import CallUs from "../modules/CallUs";
import Search from "../modules/Search";
import Tours from "../modules/Tours";
import styles from "./Homepage.module.css";
const Homepage = () => {
  // throw new Error("خطایی رخ داده")
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
        <Slider />

        {/* <AuthModal /> */}
      </div>
    </div>
  );
};

export default Homepage;
