"use client";

import { useEffect, useState } from "react";
import { convertPdateToGregorian, tourDayAndNight } from "@/utils/helper";
import { e2p, sp } from "@/utils/numbers";

import styles from "./BasketPage.module.css";

import { useSendOrder } from "@/core/services/mutations";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Form from "../modules/Form";
import { validate } from "@/utils/validate";

const BasketPage = ({ data }) => {
  const { tour, user } = data;
  const [days, nights] = tourDayAndNight(tour.startDate, tour.endDate);
  const [error, setError] = useState({});
  const [touch, setTouch] = useState({});
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

  useEffect(() => {
    setError(validate(info));
  }, [info, touch]);

  console.log(error, info);
  console.log(touch);
  // console.log(tour)
  // console.log(info, user);

  const { mutate, isPending } = useSendOrder();
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      !info.fullName?.length ||
      !info.nationalCode ||
      !info.gender ||
      !info.birthDate
    ) {
      return (
        toast.error("برای ثبت خرید نهایی ، فیلد های خالی را پر کنید"),
        setTouch({
          fullName: true,
          nationalCode: true,
          gender: true,
          birthDate: true,
        })
      );
    }
    const birthDateForSend = convertPdateToGregorian(info?.birthDate);
    const payload = {
      fullName: info.fullName.trim(),
      nationalCode: info.nationalCode,
      gender: info.gender,
      birthDate: birthDateForSend,
    };
    // if (payload) console.log("payload", payload);
    mutate(payload, {
      onSuccess: (data) => {
        setError({});
        setTouch({});
        console.log(data);
        toast.success(`${data?.data.message}`);
        router.replace("/");
      },
      onError: (err) => {
        toast.error("مشکلی پیش آمده دوباره تلاش کنید");
        console.log(err);
      },
    });
  };

  return (
    <div className={styles.container}>
      <form onSubmit={submitHandler}>
        <Form
          info={info}
          setInfo={setInfo}
          error={error}
          setError={setError}
          touch={touch}
          setTouch={setTouch}
        >
          <h3>
            <Image
              width={24}
              height={24}
              src="icons/profile-black.svg"
              alt="profile-icon"
            />
            مشخصات مسافر
          </h3>
        </Form>
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
          <button onSubmit={submitHandler} disabled={isPending}>
            ثبت و خرید نهایی
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasketPage;
