"use client";
import { useGetProfileTours } from "@/core/services/queries";
import styles from "./ToursTab.module.css";
import MyToursCard from "../elements/MyToursCard";

const ToursTab = () => {
  const { data, isPending } = useGetProfileTours();
  console.log(data?.data);

  return (
    <div>
      {isPending ? (
        <p>Loanig ...</p>
      ) : (
        <>
          {data?.data?.map((tour, index) => (
            <MyToursCard key={tour?.id} tour={tour} />
          ))}
        </>
      )}
    </div>
  );
};

export default ToursTab;
