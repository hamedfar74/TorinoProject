import OTPInput from "react-otp-input";
import { useAuth } from "../context/AuthProvider";

import styles from "./CheckOtp.module.css";
import Image from "next/image";

const CheckOtp = ({ setStep, otp, setOtp, mobile, setIsopen }) => {
  const { LoginHandler } = useAuth();
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(otp);
    LoginHandler({ mobile: mobile, code: otp }, () => setIsopen(false));
  };
  return (
    <div className={styles.container}>
      <div className={styles.backButton}>
        <button onClick={() => setStep(1)}>
          <Image width={20} height={20} src="/icons/arrow-left.svg" />
        </button>
      </div>
      <h2>کد تایید را وارد کنید</h2>
      <p>کد تایید به شماره {mobile} ارسال شد</p>
      <form onSubmit={submitHandler}>
        <div>
          <OTPInput
            containerStyle={styles.otpContainer}
            value={otp}
            onChange={setOtp}
            renderSeparator={<span style={{ width: "4px" }}> </span>}
            numInputs={6}
            inputType="number"
            inputStyle={{ width: "2.7rem" }}
            inputProps={{
              onKeyDown: (e) => {
                if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                  e.preventDefault();
                }
              },
            }}
            renderInput={(props) => (
              <input {...props} className={styles.otpinput} />
            )}
            shouldAutoFocus="true"
          />
        </div>
        <div> </div>
        {/* CountDown */}
        <button className={styles.loginBt}>ورود به تورینو</button>
      </form>
    </div>
  );
};

export default CheckOtp;
