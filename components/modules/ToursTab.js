"use client";
import { useGetProfileTours } from "@/core/services/queries";
import styles from "./ToursTab.module.css";
import MyToursCard from "../elements/MyToursCard";

const ToursTab = () => {
  const { data, isPending } = useGetProfileTours();
  // console.log(data?.data);

  return (
    <div className={styles.container}>
      {isPending ? (
        <p>Loading ...</p>
      ) : (
        <>
          {data?.data?.map((tour, index) => (
            <MyToursCard key={index} tour={tour} />
          ))}
        </>
      )}
    </div>
  );
};

export default ToursTab;
