"use client";

import Image from "next/image";

import styles from "./TourCard.module.css";
import { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { converteDateToFa, convertVehicle } from "@/utils/helper";
import { sp } from "@/utils/numbers";
import TourSkeleton from "./TourSkeleton";
import { useEffect, useState } from "react";

const TourCard = ({ tour }) => {
  const { title, price, image, startDate, endDate, fleetVehicle, options } =
    tour;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const vehicle = convertVehicle(fleetVehicle);

  const convertedDate = converteDateToFa(startDate);

  const extractMonth = (dateString) => {
    const dateObject = new DateObject({
      date: dateString,
      format: "YYYY/MM/DD",
      calendar: persian,
      locale: persian_fa,
    });
    return dateObject.month.name;
  };
  const persianMonth = extractMonth(convertedDate);

  if (loading) {
    return <TourSkeleton />;
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <Image src={image} fill alt={title} className={styles.tourImage} />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <div className={styles.dec}>
          <p>{persianMonth} ماه .</p>
          <p>
            {`nروزه + ${vehicle} - ${options[0]} - ${options[1]}`}
            {options[2] && ` - ${options[2]} `}
          </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footer}>
          <button>رزرو</button>
          <p>
            <span>{sp(price)} </span>
            تومان
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
