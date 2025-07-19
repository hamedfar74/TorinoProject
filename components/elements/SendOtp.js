"use client";

import api from "@/configs/api";
import toast from "react-hot-toast";

const SendOtp = ({ setStep, mobile, setMobile }) => {
  
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
  return (
    <div>
      <span>X</span>
      <form onSubmit={submitHandler}>
        <h2>ورود به تورینو</h2>
        <p>شماره موبایل خود را وارد کنید</p>
        <input
          name="mobile"
          type="number"
          value={mobile}
          onChange={changeHandler}
        />
        <button>ارسال کد تایید</button>
      </form>
    </div>
  );
};

export default SendOtp;
