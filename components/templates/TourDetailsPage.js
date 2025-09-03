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

  const [days, nights] = tourDayAndNight(startDate, endDate);
  const begin = DateWithPMonth(startDate);
  const ends = DateWithPMonth(endDate);

  return (
    <div className={styles.container}>
      <div className={styles.webDesignContainer}>
        <div className={styles.webTop}>
          <div className={styles.imageCont}>
            <Image src={image} fill alt={title} />
          </div>
          <div className={styles.webInfo}>
            <div className={styles.title}>
              <h2>{title}</h2>
              <p>{`${e2p(days)}${" "}روز و ${e2p(nights)} شب`}</p>
            </div>
            <div className={styles.attributes}>
              {options.includes("راهنمای تور") && (
                <p>
                  <span className={styles.iconCont}>
                    <Image fill src="/icons/user-tick.svg" alt="user" />
                  </span>
                  تورلیدر از مبدا
                </p>
              )}
              <p>
                <span className={styles.iconCont}>
                  <Image fill src="/icons/map.svg" alt="user" />
                </span>
                برنامه سفر
              </p>
              <p>
                <span className={styles.iconCont}>
                  <Image fill src="/icons/medal-star.svg" alt="user" />
                </span>
                تضمین کیفیت
              </p>
            </div>
            <div className={styles.webButton}>
              <p>
                <span>{sp(price)}</span> تومان
              </p>
              <DetailBt info={data}>رزرو و خرید</DetailBt>
            </div>
          </div>
        </div>

        <div className={styles.tourInfo}>
          <div className={styles.horizontalScroll}>
            {insurance && (
              <div className={styles.infoItems}>
                <div>
                  بیمه
                  <span>
                    <Image
                      fill
                      src="/icons/security.svg"
                      alt="insurance"
                    />
                  </span>
                </div>
                <p>بیمه {e2p(50)} هزار دیناری</p>
              </div>
            )}
            <div className={styles.infoItems}>
              <div>
                ظرفیت
                <span>
                  <Image
                    fill
                    src="/icons/profile-2user.svg"
                    alt="capacity"
                  />
                </span>
              </div>
              <p>حداکثر {e2p(availableSeats)} نفر</p>
            </div>
            <div className={styles.infoItems}>
              <div>
                حمل و نقل
                <span>
                  <Image
                    fill
                    src="/icons/bus.svg"
                    alt="transport"
                  />
                </span>
              </div>
              <p>{convertVehicle(fleetVehicle)}</p>
            </div>

            <div className={styles.infoItems}>
              <div>
                تاریخ برگشت
                <span>
                  <Image
                    fill
                    src="/icons/calendar-2.svg"
                    alt="insurance"
                  />
                </span>
              </div>
              <span className={styles.startDate}>
                <p>{ends.year}</p>
                <p>{ends.month}</p>
                <p>{ends.day}</p>
              </span>
            </div>

            <div className={styles.infoItems}>
              <div>
                تاریخ رفت
                <span>
                  <Image
                    fill
                    src="/icons/calendar-2.svg"
                    alt="capacity"
                  />
                </span>
              </div>
              <span className={styles.startDate}>
                <p>{begin.year}</p>
                <p>{begin.month}</p>
                <p>{begin.day}</p>
              </span>
            </div>
            <div className={styles.infoItems}>
              <div>
                مبدا
                <span>
                  <Image
                    fill
                    src="/icons/routing-2.svg"
                    alt="transport"
                  />
                </span>
              </div>
              <p>{convertCity(origin.name)}</p>
            </div>
          </div>
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
