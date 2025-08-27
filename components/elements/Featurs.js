import Image from "next/image";
import styles from "./Features.module.css";
import { e2p } from "@/utils/numbers";

const Featurs = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.iconContainer}>
          <Image fill src="/icons/best-price.svg" alt="icon" />
        </div>
        <span>
          <h4>بصرفه ترین قیمت</h4>
          <p>بصرفه ترین و ارزان ترین قیمت تور را از ما بخواهید.</p>
        </span>
      </div>
      <div>
        <div className={styles.iconContainer}>
          <Image fill src="/icons/message.svg" alt="icon" />
        </div>
        <span>
          <h4>پشتیبانی</h4>
          <p>پشتیبانی و همراهی {e2p("24")} ساعته در تمامی مراحل سفر شما.</p>
        </span>
      </div>
      <div>
        <div className={styles.iconContainer}>
          <Image fill src="/icons/endors.svg" alt="icon" />
        </div>
        <span>
          <h4>رضایت کاربران</h4>
          <p>رضایت بیش از {e2p("10")} هزار کاربر از تور های ما. </p>
        </span>
      </div>
    </div>
  );
};

export default Featurs;
