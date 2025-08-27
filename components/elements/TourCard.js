"use client";

import Image from "next/image";

import styles from "./TourCard.module.css";

import { converteDateToFa, convertVehicle, extractMonth, tourDayAndNight } from "@/utils/helper";
import { e2p, sp } from "@/utils/numbers";
import TourSkeleton from "./TourSkeleton";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const TourCard = ({ tour }) => {
  const {id, title, price, image, startDate, endDate, fleetVehicle, options } =
    tour;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const router = useRouter()

  const vehicle = convertVehicle(fleetVehicle);

  const convertedDate = converteDateToFa(startDate);

  const persianMonth = extractMonth(convertedDate);

  const [day,night] = tourDayAndNight(startDate,endDate)
  
  if (loading) {
    return <TourSkeleton />;
  }

  const clickHandler =() => {
    router.push(`/tour/${id}`)
  }
  return (
    <div className={styles.container}>
      <div className={styles.imageBox}>
        <Image src={image} fill alt={title} className={styles.tourImage} />
      </div>
      <div className={styles.info}>
        <h3>{title}</h3>
        <div className={styles.desc}>
          <p>{persianMonth}ماه .</p>
          <p>
            {`${e2p(day)}روزه - ${vehicle} - ${options[0]} - ${options[1]}`}
            {options[2] && ` - ${options[2]} `}
          </p>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footer}>
          <button onClick={clickHandler}>رزرو</button>
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
