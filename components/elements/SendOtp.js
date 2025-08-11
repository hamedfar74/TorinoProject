"use client";

import api from "@/core/configs/api";
import toast from "react-hot-toast";

import styles from "./SendOtp.module.css";
import { e2p } from "@/utils/numbers";
import { useSendOtp } from "@/core/services/mutations";

const SendOtp = ({ setStep, mobile, setMobile, setIsopen }) => {
  const regEx = /^(09\d{9})$/gs;

  const { isPending, mutate } = useSendOtp();

  const changeHandler = (event) => {
    setMobile(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!regEx.test(mobile)) return toast.error("شماره وارد شده صحیح نمیباشد");
    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(`کد تایید ارسال شد : ${data?.data?.code} `, {
            duration: 7000,
          });
          setStep(2);
        },
        onError: (err) => {
          toast.error("مشکلی پیش آمده دوباره تلاش کنید")
          console.log(err)
        },
      }
    );
  };
  const pNum = e2p("09121112233");

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
          onKeyDown={(e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown") {
              e.preventDefault();
            }
          }}
          onChange={changeHandler}
        />
        <button className={`${isPending ? styles.disable : null}`}>
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
};

export default SendOtp;
