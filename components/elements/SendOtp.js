"use client";

import api from "@/configs/api";
import toast from "react-hot-toast";

import styles from "./SendOtp.module.css"
import { e2p } from "@/utils/numbers";

const SendOtp = ({ setStep, mobile, setMobile ,setIsopen}) => {
  
  const regEx = /^(09\d{9})$/gs;
  
  const changeHandler = (event) => {
    setMobile(event.target.value);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (!regEx.test(mobile)) return toast.error("شماره وارد شده صحیح نمیباشد");
    const req = await api
      .post("auth/send-otp", { mobile: mobile })
      .then((res) => toast.success(`کد تایید ارسال شد : ${res?.data?.code} `, { duration: 7000 }));
    setStep(2);
  };
  const pNum = e2p("09121112233")
  
  return (
    <div className={styles.container}>
      <span onClick={() => setIsopen(false)}>X</span>
      <form onSubmit={submitHandler} className={styles.form}>
        <h2>ورود به تورینو</h2>
        <p>شماره موبایل خود را وارد کنید</p>
        <input
          name="mobile"
          type="number"
          value={mobile}
          placeholder={pNum}
          onChange={changeHandler}
        />
        <button>ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOtp;
