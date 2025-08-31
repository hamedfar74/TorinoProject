"use client";

import { useSendOtp } from "@/core/services/mutations";
import { e2p } from "@/utils/numbers";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styles from "./CountDown.module.css"

const CountDown = ({mobile}) => {
  const [timeLeft, setTimeLeft] = useState(120);
  const [resend, setResend] = useState(false);
  const {mutate} = useSendOtp()
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      setResend(true);
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
//   console.log(minutes, ":", seconds.toString().padStart(2, "0"));
  const clickHandler = () => {
    setTimeLeft(120)
    setResend(false)
    mutate(
      { mobile },
      {
        onSuccess: (data) => {
          toast.success(`کد تایید ارسال شد : ${data?.data?.code} `, {
            duration: 7000,
          });
        },
        onError: (err) => {
          toast.error("مشکلی پیش آمده دوباره تلاش کنید")
          console.log(err)
        },
      }
    );
  }
  return <div className={styles.container}>
    {!resend && (
    <p>
    {e2p(seconds.toString().padStart(2, "0"))} : {e2p(minutes)} تا ارسال مجدد کد
    </p>
    )}
    {resend && (
        <button onClick={clickHandler}>ارسال مجدد کد</button>
    )}
  </div>;
};

export default CountDown;
