"use client";

import {
  convertCity,
  convertVehicle,
  DateWithPMonth,
  tourDayAndNight,
} from "@/utils/helper";
import { sp } from "@/utils/numbers";
import { useEffect, useState } from "react";
import styles from "./MyToursCard.module.css"

const MyToursCard = ({ tour }) => {
  const {
    title,
    id,
    destination,
    startDate,
    endDate,
    origin,
    fleetVehicle,
    price,
  } = tour;
  const [status, setStatus] = useState("");
  console.log(status);
  const diff = () => {
    if (!endDate) {
      setStatus("داده تاریخ در دسترس نیست");
      return;
    }
    const endTour = new Date(endDate);
    const today = new Date();
    if (today > endTour) {
      setStatus("به اتمام رسیده");
      return;
    } else {
      setStatus("در حال برگزاری");
      return;
    }
  };
  useEffect(() => {
    diff();
  }, [endDate]);

  const beginIn = DateWithPMonth(startDate);
  const endsIn = DateWithPMonth(endDate);

  return (
    <div className={styles.container} >
      <div className={styles.head}>
        <p><img src="icons/sun-fog.svg" alt="icon" />{title}</p>
        <p>سفر با {convertVehicle(fleetVehicle)}</p>
        <p>{status}</p>
      </div>
      <div className={styles.destination}>
        <span>
          <p>
            {convertCity(origin.name)} به {convertCity(destination.name)}
          </p>
          <p>{beginIn.day + beginIn.month + beginIn.year}</p>
        </span>
        <span>
          <p>تاریخ برگشت</p>
          <p>{endsIn.day + endsIn.month + endsIn.year}</p>
        </span>
      </div>
      <div className={styles.bottom} >
        <p>شماره تور</p>
        <span>{id.split("-")[4]}</span>
        <div></div>
        <p>مبلغ پرداخت شده</p>
        <p>
          <span>{sp(price)} </span> تومان
        </p>
      </div>
    </div>
  );
};

export default MyToursCard;
