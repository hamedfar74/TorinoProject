"use client";

import { useState } from "react";
import { convertPdateToGregorian, tourDayAndNight } from "@/utils/helper";
import { e2p, sp } from "@/utils/numbers";

import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import styles from "./BasketPage.module.css";
import DateObject from "react-date-object";
import { useSendOrder } from "@/core/services/mutations";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const BasketPage = ({ data }) => {
  const { tour, user } = data;
  const [days, nights] = tourDayAndNight(tour.startDate, tour.endDate);
  const [error, setError] = useState("");
  const [info, setInfo] = useState({
    fullName:
      user?.firstName && user?.lastName
        ? `${user?.firstName} ${user?.lastName}`
        : "",
    nationalCode: user?.nationalCode ? user.nationalCode : "",
    gender: user?.gender ? user?.gender : "",
    birthDate: user?.birthDate ? user?.birthDate : null,
  });
  const router = useRouter();

  console.log(info, user);
  // console.log(convertPdateToGregorian(info?.birthDate));

  const today = new Date();
  const maxDate = new Date(
    today.getFullYear() - 15,
    today.getMonth(),
    today.getDate()
  );

  const changeHandler = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };
  const { mutate, isPending } = useSendOrder();
  const submitHandler = (event) => {
    event.preventDefault();
    const birthDateForSend = convertPdateToGregorian(info?.birthDate);
    const payload = {
      fullName: info.fullName.trim(),
      nationalCode: info.nationalCode,
      gender: info.gender,
      birthDate: birthDateForSend,
    };
    if (payload) console.log("payload", payload);
    mutate(payload, {
      onSuccess: (data) => {
        console.log(data);
        toast.success(`${data?.data.message}`);
        router.replace("/");
      },
      onError: (err) => {
        console.log(err);
      },
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <div className={styles.userInfo}>
          <h3><img src="icons/profile-black.svg" />مشخصات مسافر</h3>
          <input
            type="text"
            name="fullName"
            value={info.fullName}
            placeholder="نام و نام خانوادگی"
            onChange={changeHandler}
          />
          <input
            type="text"
            name="nationalCode"
            value={info.nationalCode}
            placeholder="کد ملی"
            onChange={changeHandler}
          />
          <select name="gender" onChange={changeHandler}>
            <option value="" defaultValue>
              جنسیت
            </option>
            <option value="male">مرد</option>
            <option value="female">زن</option>
          </select>
          <DatePicker
            value={info.birthDate}
            placeholder="تاریخ تولد"
            onChange={(dateObj) => {
              setInfo((prev) => ({
                ...prev,
                birthDate: dateObj,
              }));
            }}
            calendar={persian}
            locale={persian_fa}
            format="YYYY/MM/DD"
            maxDate={maxDate}
          />
          {/* </form> */}
        </div>
        <div className={styles.summary}>
          <div className={styles.head}>
            <h3>{tour.title}</h3>
            <p>{`${e2p(days)}${" "}روز و ${e2p(nights)} شب`}</p>
          </div>
          <div className={styles.finalPrice}>
            <p>قیمت نهایی</p>
            <p>
              <span>{sp(tour.price)}</span> تومان
            </p>
          </div>
          <button onSubmit={submitHandler}>ثبت و خرید نهایی</button>
        </div>
      </form>
    </div>
  );
};

export default BasketPage;
