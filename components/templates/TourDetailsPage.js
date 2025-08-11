import Image from "next/image";
import { e2p, sp } from "@/utils/numbers";
import {
  convertCity,
  convertVehicle,
  DateWithPMonth,
  tourDayAndNight,
} from "@/utils/helper";
import DetailBt from "../elements/DetailBt";

import styles from "./TourDetailsPage.module.css";

export default async function TourDetailsPage({ params }) {
  const { tourId } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}tour/${tourId}`, {
    cache: "no-cache",
  });
  const data = await res.json();
  const {
    title,
    origin,
    destination,
    startDate,
    endDate,
    fleetVehicle,
    price,
    availableSeats,
    insurance,
    options,
    image,
  } = data;
  // console.log(data);
  // console.log(options)
  // console.log(options.includes("راهنمای تور"));

  const [days, nights] = tourDayAndNight(startDate, endDate);
  const begin = DateWithPMonth(startDate);
  const ends = DateWithPMonth(endDate);

  return (
    <div className={styles.container}>
      <Image src={image} width={330} height={220} alt={title} />
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{`${e2p(days)}${" "}روز و ${e2p(nights)} شب`}</p>
      </div>
      <div className={styles.attributes}>
        {options.includes("راهنمای تور") && (
          <p>
            <Image
              width={14}
              height={14}
              src="/icons/user-tick.svg"
              alt="user"
            />{" "}
            تورلیدر از مبدا{" "}
          </p>
        )}
        <p>
          <Image width={14} height={14} src="/icons/map.svg" alt="user" />{" "}
          برنامه سفر{" "}
        </p>
        <p>
          <Image
            width={14}
            height={14}
            src="/icons/medal-star.svg"
            alt="user"
          />{" "}
          تضمین کیفیت{" "}
        </p>
      </div>
      <div className={styles.tourInfo}>
        <div className={styles.horizontalScroll}>
          {insurance && (
            <span className={styles.infoItems}>
              <span>
                بیمه{" "}
                <Image
                  width={16}
                  height={19}
                  src="/icons/security.svg"
                  alt="insurance"
                />
              </span>
              <p>بیمه {e2p(50)} هزار دیناری</p>
            </span>
          )}
          <span className={styles.infoItems}>
            <span>
              ظرفیت{" "}
              <Image
                width={16}
                height={19}
                src="/icons/profile-2user.svg"
                alt="capacity"
              />{" "}
            </span>
            <p>حداکثر {e2p(availableSeats)} نفر</p>
          </span>
          <span className={styles.infoItems}>
            <span>
              حمل و نقل{" "}
              <Image
                width={16}
                height={19}
                src="/icons/bus.svg"
                alt="transport"
              />
            </span>
            <p>{convertVehicle(fleetVehicle)}</p>
          </span>
          {insurance && (
            <span className={styles.infoItems}>
              <span>
                تاریخ برگشت{" "}
                <Image
                  width={16}
                  height={19}
                  src="/icons/calendar-2.svg"
                  alt="insurance"
                />
              </span>
              <span>
                <p>{ends.year}</p>
                <p>{ends.month}</p>
                <p>{ends.day}</p>
              </span>
            </span>
          )}
          <span className={styles.infoItems}>
            <span>
              تاریخ رفت{" "}
              <Image
                width={16}
                height={19}
                src="/icons/calendar-2.svg"
                alt="capacity"
              />{" "}
            </span>
            <span className={styles.startDate}>
              <p>{begin.year}</p>
              <p>{begin.month}</p>
              <p>{begin.day}</p>
            </span>
          </span>
          <span className={styles.infoItems}>
            <span>
              مبدا{" "}
              <Image
                width={16}
                height={19}
                src="/icons/routing-2.svg"
                alt="transport"
              />
            </span>
            <p>{convertCity(origin.name)}</p>
          </span>
        </div>
      </div>
      <div className={styles.bottom}>
        <DetailBt info={data}>رزرو و خرید</DetailBt>
        <p>
          <span>{sp(price)}</span> تومان
        </p>
      </div>
    </div>
  );
}
